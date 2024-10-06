const host = 'https://staging-api.ordz.games'
module.exports = {
  transpileDependencies: ['sats-connect'],
  productionSourceMap: false,

  devServer: {
    // host: '127.0.0.1',
    // https: true,
    port: '3500',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: host,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: config => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'assets': '@/assets',
      'components': '@/components',
      'views': '@/views',
      'config': '@/config',
      'mixins': '@/mixins',
      'actions': '@/actions',
      'store': '@/store',
      'images': '@/assets/images',
      'utils': '@/utils'
    })
  }
}
