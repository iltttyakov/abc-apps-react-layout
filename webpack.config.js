const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        }
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|ttf|woff|woff2|otf|webp)$/i,
                use: 'file-loader'
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    // optimization: {
    //     minimizer: [new UglifyJsPlugin()],
    // },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            algorithm: 'gzip'
        }),
    ],
    devtool: 'inline-source-map',
};