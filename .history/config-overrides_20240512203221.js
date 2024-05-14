module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.m?js$/,
        enforce: 'pre',
        use: [{
            loader: require.resolve('source-map-loader'),
            options: {}
        }],
        exclude: [
            // Exclude specific node_modules that don't have source maps or have broken source maps
            /node_modules\/@react-aria/,
            /node_modules\/@react-stately/,
            // Add other libraries or paths as needed
        ]
    });

    return config;
};
