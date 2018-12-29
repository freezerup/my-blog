const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const options = process.argv.splice(2)
const PROT = process.env.PROT || 8000

switch(options[0]) {
  case 'dev':
    buildDev()
    break
  case 'prod':
    buildProd()
    break
  default:
    help()
    break
}

// 开发环境
function buildDev() {
  const compiler = webpack(devConfig)
  const server = new WebpackDevServer(compiler, {
      hot: true,
      inline: true,
      watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
      },
      historyApiFallback:{
          index:'/index.html' 
      },
      stats: { 
          colors: true 
      },
      // proxy: {
      //     '/api': {
      //         target: '',
      //         secure: false,
      //         pathRewrite: {'^/api' : '/'},
      //         changeOrigin: true,
      //     }
      // }
  })

  server.listen(PROT)

  console.log(`服务端启动的链接地址为：http://127.0.0.1:${PROT}`)
}


// 正式环境
function buildProd() {
  process.env.NODE_ENV = 'production';
  webpack(prodConfig, (err, stats) => {
    if (err) throw err;
    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })  }\n`);

  });
}


/**
 * 帮助
 */
function help() {
  console.log(
    `
    Usage:
    npm run dev           # 开发&测试环境 实时编译
    npm run prod          # 上传静态文件到CDN & 生成上线包
    npm run help          # 帮助
    `.cyan
  );
}


