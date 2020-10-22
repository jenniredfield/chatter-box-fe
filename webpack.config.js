const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.html/,
            use: ['html-loader']
          },
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
              files: "./src/**/*",
            },
          }),
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
          })
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    }
}