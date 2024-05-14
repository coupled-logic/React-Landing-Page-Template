module.exports = function override(config, env) {
    // Ensure the source-map-loader is applied only where needed and excluding problematic modules
    config.module.rules.push({
        test: /\.m?js/,
        enforce: 'pre',
        use: {
            loader: require.resolve('source-map-loader'),
            options: {
                exclude: [
                    /node_modules\/@react-aria/,
                    /node_modules\/@react-stately/,  // Adding more exclusions as needed
                ]
            }
        },
    });

    // Return the updated configuration
    return config;
};
