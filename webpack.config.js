const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src",
    resolve: {
        modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./lib"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "@babel/proposal-class-properties",
                            "dynamic-import-node",
                        ],
                    },
                },
            },
        ],
    },
    devtool: "source-map",
    plugins: [],
};
