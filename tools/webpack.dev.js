const webpack = require('webpack')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const PROT = process.env.PROT || 8000

const webpackDev = {
  mode: 'development',
  entry: {
    main:[
      `webpack-dev-server/client?http://localhost:${PROT}/`,
      'webpack/hot/dev-server',
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: `http://127.0.0.1:${PROT}` })
  ],
}

module.exports = merge(common, webpackDev)
