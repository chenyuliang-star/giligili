const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./App/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]_[hash:8].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude:  /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-react"]
                }  
            }
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
               
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "App/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 8080,
        open: true
    }
}