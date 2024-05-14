const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add a new rule or modify existing rules to handle source maps
    config.module.rules.push({
        test: /\.m?js/,
        enforce: 'pre',
        loader: require.resolve('source-map-loader'),
        exclude: /node_modules\/@react-aria/, // Exclude @react-aria from source map loader
    });

    // Return the updated configuration
    return config;
};
