var path = require('path');

module.exports = {
    entry: __dirname + "/js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest','react']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            __dirname + "/node_modules/",
            __dirname + "/js/",
            __dirname + "/css/"
        ]
    }
};
