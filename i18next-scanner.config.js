const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const chalk = require('chalk');
const eol = require('eol');
const VirtualFile = require('vinyl');
const flattenObjectKeys = require('i18next-scanner/lib/flatten-object-keys')
    .default;
const omitEmptyObject = require('i18next-scanner/lib/omit-empty-object')
    .default;

function getFileJSON(resPath) {
    try {
        console.log(fs.realpathSync(path.join('src', 'translations', resPath)));
        return JSON.parse(
            fs
                .readFileSync(fs.realpathSync(path.join('src', 'translations', resPath)))
                .toString('utf-8')
        );
    } catch (e) {
        console.log(e);
        return {};
    }
}

function flush(done) {
    const { parser } = this;
    const { options } = parser;

    // Flush to resource store
    const resStore = parser.get({ sort: options.sort });
    const { jsonIndent } = options.resource;
    const lineEnding = String(options.resource.lineEnding).toLowerCase();

    Object.keys(resStore).forEach(lng => {
        const namespaces = resStore[lng];

        Object.keys(namespaces).forEach(ns => {
            let obj = namespaces[ns];

            const resPath = parser.formatResourceSavePath(lng, ns);

            let resContent = getFileJSON(resPath);

            if (options.removeUnusedKeys) {
                const namespaceKeys = flattenObjectKeys(obj);
                const resContentKeys = flattenObjectKeys(resContent);
                const unusedKeys = _.differenceWith(
                    resContentKeys,
                    namespaceKeys,
                    _.isEqual
                );

                for (let i = 0; i < unusedKeys.length; ++i) {
                    _.unset(resContent, unusedKeys[i]);
                }

                resContent = omitEmptyObject(resContent);
            }

            obj = { ...obj, ...resContent };

            let text = `${JSON.stringify(obj, null, jsonIndent)}\n`;

            if (lineEnding === 'auto') {
                text = eol.auto(text);
            } else if (lineEnding === '\r\n' || lineEnding === 'crlf') {
                text = eol.crlf(text);
            } else if (lineEnding === '\n' || lineEnding === 'lf') {
                text = eol.lf(text);
            } else if (lineEnding === '\r' || lineEnding === 'cr') {
                text = eol.cr(text);
            } else {
                // Defaults to LF
                text = eol.lf(text);
            }

            this.push(
                new VirtualFile({
                    path: resPath,
                    contents: Buffer.from(text)
                })
            );
        });
    });

    done();
}

module.exports = {
    input: ['src/**/*.js'],
    output: './src/translations/',
    options: {
        debug: false,
        func: {
            list: ['t'],
            extensions: ['.js'],
        },
        lngs: ['en', 'fr'],
        ns: ['translation'],
        defaultLng: 'en',
        defaultNs: 'translation',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            savePath: '{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n',
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}',
        },
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
                        keySeparator: false,
                    })
                );
                ++count;
            }
        );

        if (count > 0) {
            console.log(
                `i18next-scanner: count=${chalk.cyan(
                    count
                )}, file=${chalk.yellow(JSON.stringify(file.relative))}`
            );
        }

        done();
    },
    flush
};
