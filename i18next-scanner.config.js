/* eslint-env node */
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    input: ['src/**/*.js'],
    output: './src/translations/',
    options: {
        debug: false,
        func: {
            list: ['t'],
            extensions: ['.js']
        },
        lngs: ['en', 'fr'],
        ns: ['translation'],
        defaultLng: 'en',
        defaultNs: 'translation',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: '{{lng}}/missing/{{ns}}.json',
            savePath: '{{lng}}/missing/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        'use strict';
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(
            content,
            { list: ['i18next._', 'i18next.__'] },
            (key, options) => {
                parser.set(
                    key,
                    Object.assign({}, options, {
                        nsSeparator: false,
                        keySeparator: false
                    })
                );
                ++count;
            }
        );

        if (count > 0) {
            console.log(
                `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
                    JSON.stringify(file.relative)
                )}`
            );
        }

        done();
    }
};