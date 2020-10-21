const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
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
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    }
}