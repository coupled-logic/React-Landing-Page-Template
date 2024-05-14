module.exports = function override(config, env) {
    // Disable source map loader for @react-aria and @react-stately packages
    config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules\/(@react-aria|@react-stately)/,
        resolve: {
            fullySpecified: false,
        },
        use: {
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: false }]],
            },
        },
    });
    

        return config;
    };