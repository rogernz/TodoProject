const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'index.js', 'index.jsx', '.json', '.css', 'index.json'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
      filename: 'index.html', // relative to root of the application
      inject: 'body',
    }),
  ],
};
