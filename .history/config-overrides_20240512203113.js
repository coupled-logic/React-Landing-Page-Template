module.exports = function override(config, env) {
    // Ensure the source-map-loader is applied only where needed and excluding problematic modules
    config.module.rules.push({
        test: /\.m?js/,
        enforce: 'pre',
        exclude: /node_modules\/@react-aria/, // Exclude @react-aria from source map processing
        use: {
            loader: require.resolve('source-map-loader'),
            options: {
                // Correctly configured options, if needed, can be placed here
            }
        }
    });

    // Return the updated configuration
    return config;
};
