const rewireSourceMapLoader = require('react-app-rewire-source-map-loader');

module.exports = function override(config, env) {
    config = rewireSourceMapLoader(config, env);
    return config;
};