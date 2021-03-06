var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'client')
};

config.plugins = config.plugins.concat([

    // Adds webpack HMR support. It act's like livereload,
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
