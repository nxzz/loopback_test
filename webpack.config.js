'use strict';

var webpack = require("webpack");
// var DashboardPlugin = require('webpack-dashboard/plugin');
var path = require("path");

module.exports = {
    // ビルドの基点となるファイル
    entry: {
        'index': path.join(__dirname, '/webpack/Index/index.js'),
        'admin': path.join(__dirname, '/webpack/Admin/index.js'),
    },
    // ビルド後のファイル
    output: {
        path: path.join(__dirname, "/client/dist"),
        filename: '[name].bundle.js'
    },
    devtool: "source-map",
    // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['ng-annotate-loader', 'babel-loader']
        }, {
            test: /\.html$/,
            loaders: ['raw-loader', 'html-minify-loader']
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?modules'],
        },
        {
            //bootstrap font
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: 'file-loader'
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        // new DashboardPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            warnings: false
        })
    ]
};
