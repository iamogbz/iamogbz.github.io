const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html",
});

module.exports = {
    mode: "production",
    entry: "./src",
    resolve: {
        modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./"),
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
                        plugins: ["transform-class-properties"],
                    },
                },
            },
        ],
    },
    devtool: "source-map",
    plugins: [htmlPlugin],
};
