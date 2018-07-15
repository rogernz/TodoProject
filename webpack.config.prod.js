const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var argv = require('yargs').argv;

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve('build'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'index.js', 'index.jsx', '.json', '.css', 'index.json'],
        modules: [path.resolve('./src'), "node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }

            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }, {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }
                    , {
                    loader: 'css-loader',
                }
                ]
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                // 'API_URL': JSON.stringify(api),
                // 'MS_ID': JSON.stringify(microsoftauth_id),
                // 'STRIPE_KEY': JSON.stringify(stripe_key),
                // "G_ID": JSON.stringify(googleauth_id),
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.template.html',
            filename: 'index.html', //relative to root of the application
            inject: 'body'
        }),
    ]
}