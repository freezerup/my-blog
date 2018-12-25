const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
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
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/scss': path.resolve(__dirname, './src/scss'),
      '@/lib': path.resolve(__dirname, './src/lib')
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   compress: true,
  //   port: 9000
  // },
};