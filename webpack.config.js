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
                    presets: ['latest','stage-2']
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest','react','stage-2']
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
