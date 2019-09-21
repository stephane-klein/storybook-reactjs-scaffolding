const path = require("path");

module.exports = function ({ config }) {
    // This is a workaround https://github.com/storybookjs/storybook/issues/6974#issuecomment-499903328
    config.module.rules.unshift({
        test: /\.(js|jsx)?$/,
        include: path.resolve(__dirname, "../stories/"),
        loaders: [
            {
                loader: require.resolve("@storybook/addon-storysource/loader"),
                options: {
                    prettierConfig: {
                        tabWidth: 4,
                        trailingComma: "es5",
                    },
                },
            },
        ],
        enforce: "pre",
    });

    return config;
};