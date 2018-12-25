const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

const webpackDev = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000
  // },
}

module.exports = merge(common, webpackDev)