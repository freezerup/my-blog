const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
console.log(path.resolve(__dirname, 'dist'))

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/scss': path.resolve(__dirname, './src/scss'),
      '@/lib': path.resolve(__dirname, './src/lib')
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
};