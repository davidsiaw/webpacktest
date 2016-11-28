var path = require('path');

module.exports = {
    entry: __dirname + "/js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        modulesDirectories: [
            __dirname + "/js/",
            __dirname + "/css/"
        ]
    }
};
