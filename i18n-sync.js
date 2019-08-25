/* eslint-env node */
/* eslint no-console: ["error", { allow: ["warn", "err", "log"] }] */

/**
 *
 * Sync translations between what i18next-scanner gets and what already exists
 * - i18next-scanner scans everything and all all in i18n/{{lang}}/missing/{{ns}}.json
 * - Missing translations values are always null
 * - Existing translations are kept in i18n/{{lang}}/{{ns}}.json
 * - If a string gets removed in missing/{{ns}}.json it will get removed in existing one
 *
 * HOW TO USE THIS SCRIPT
 *
 * 1) Config your i18next-scanner to have a structure like:
 *   i18n
 *    - en
 *      - namespace1.json
 *      - namespace2.json
 *    + fr
 *    + es
 *
 * 2) Set `i18nFolder` variable below
 * 3) Add shortcut to your package.json: `"i18n": "i18next-scanner && node i18n-sync.js"`
 * 4) yarn run i18n  OR   npm run i18n
 * 5) Enjoy
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const i18nFolder = path.join(__dirname, 'src', 'translations');

// Title
console.log(
    chalk.greenBright.bgBlack.underline('                                  ')
);
console.log(chalk.greenBright.bgBlack('                                  '));
console.log(
    chalk.greenBright.bgBlack.bold('         🇫🇷  SYNCING I18N  🇬🇧         ')
);
console.log(
    chalk.greenBright.bgBlack.underline('                                  ')
);

// Read i18n folder
fs.readdir(i18nFolder, function (err, languages) {
    // For each locale
    languages.forEach(lang => {
    // Set path with languages
        const existingTranslationsFolder = `${i18nFolder}/${lang}`;
        const missingTranslationsFolder = `${i18nFolder}/${lang}/missing`;

        // Read files in missing folder
        fs.readdir(missingTranslationsFolder, function (err, files) {
            // For each file, merge new JSON (from scanner) to existing one (my translations)
            files.forEach(file => {
                let missingTranslationsObj, existingTranslationObj;
                try {
                    console.log(
                        chalk.yellow.bold(
                            `-> 📕 Reading missing translations from i18n/${lang}/missing/${file}`
                        )
                    );
                    missingTranslationsObj = JSON.parse(
                        fs.readFileSync(`${missingTranslationsFolder}/${file}`)
                    );
                    console.log(
                        chalk.cyanBright.bold(
                            `-> 📗 Reading existing translations from i18n/${lang}/${file}`
                        )
                    );
                    existingTranslationObj = JSON.parse(
                        fs.readFileSync(`${existingTranslationsFolder}/${file}`)
                    );
                } catch (err) {
                    console.log(
                        chalk.red.bold(
                            '💥 Formatting error in i18n JSON files, check linting!'
                        )
                    );
                    return null;
                }

                const existingKeys = Object.keys(existingTranslationObj).length;
                const missingKeys = Object.keys(missingTranslationsObj).length;

                // Log number of keys
                console.log(
                    'Scanned keys: ',
                    existingKeys,
                    '| Existing keys:',
                    missingKeys,
                    missingKeys < existingKeys ? '| -> Removing unused keys' : ''
                );
                console.log(' ');

                /**
         *  Remove unused keys
         *
         * if missing has less keys, remove keys from existing
         */
                Object.keys(existingTranslationObj).forEach(key => {
                    if (missingTranslationsObj[key] === undefined) {
                        delete existingTranslationObj[key];
                    }
                });

                // Existing translation overwrites properties of the missing object -> Merging
                const mergedObject = {
                    ...missingTranslationsObj,
                    ...existingTranslationObj
                };
                // Turn the object back into a string, prettify with 2 spaces
                const mergeObjectString = JSON.stringify(mergedObject, null, 2);
                // Write the new JSON into the existing file
                fs.writeFile(
                    `${existingTranslationsFolder}/${file}`,
                    mergeObjectString,
                    'utf8',
                    function (err) {
                        if (err) {
                            console.err(
                                'An error occured while writing merge translations into JSON file.'
                            );
                            return err;
                        }
                        displayResult(existingKeys, missingKeys, lang, file);
                    }
                );
            });
        });
    });
});

function displayResult(existingKeys, missingKeys, lang, file) {
    let operation = '';
    operation +=
    missingKeys < existingKeys
        ? `Removed ${existingKeys - missingKeys} keys`
        : '';
    operation +=
    missingKeys > existingKeys
        ? `Added ${missingKeys - existingKeys} new keys`
        : '';
    operation += missingKeys === existingKeys ? 'No changes made' : '';

    console.log(
        chalk.greenBright.bold(
            `👌 Syncing i18n files: ${operation} in file: i18n/${lang}/${file}`
        )
    );
}
