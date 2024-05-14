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
