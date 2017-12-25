const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.resolve("./src"),
    entry: {
        index: './index.js',
        user: './user/weblet.ts'
    },
    output: {
        path: path.resolve("./face"),
        filename: '[name].weblet.js'
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.ts?$/,
            exclude: ["node_modules"],
            use: ["awesome-typescript-loader", "source-map-loader"]
        }]
    }
};