const path = require('path')
const HappyPack = require('happypack')
const os = require('os')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

console.log(path.resolve(__dirname, '../dist'))

module.exports = {
  entry: {
    main:[
        'babel-polyfill',
        path.resolve(__dirname, '../src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: [ 'happypack/loader?id=js' ]
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
        exclude: /node_modules/,
        loader: [ 'happypack/loader?id=sass' ]
      }
    ]
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/page': path.resolve(__dirname, '../src/page'),
      '@/route': path.resolve(__dirname, '../src/route'),
      '@/scss': path.resolve(__dirname, '../src/scss'),
      '@/lib': path.resolve(__dirname, '../src/lib'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  plugins: [
    //js 编译多线程 
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [{
          loader: 'babel-loader',
          options: {
              presets: [ 'env','react'],
              plugins: ['syntax-dynamic-import','transform-object-rest-spread']
          }
      }],
    }),
    // sass 编译多线程
    new HappyPack({
      id: 'sass',
      threadPool: happyThreadPool,
      loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }),
    new CleanWebpackPlugin(['dist'],{
      root: path.join(__dirname, '../')
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
};