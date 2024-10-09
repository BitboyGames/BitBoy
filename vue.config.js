const path = require('path')
module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  filenameHashing: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()

    config.module.rule('ts').test(/\.ts$/).use('ts-loader').loader('ts-loader').end()
  },
  configureWebpack: config => {
    config.entry = './src/main.ts'
    config.resolve = {
      extensions: ['.ts', '.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
