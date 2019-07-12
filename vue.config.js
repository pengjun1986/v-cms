// vue.config.js
module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  // run vue-cli-service build folder, default dist
  outputDir: process.env.OUTPUT_DIR,
  // webpack 配置
  configureWebpack: {
    externals: {
      // 此部分组件已经在html中统一添加
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    }
  },
  // webpack-dev-server 的选项
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    // API 请求代理
    proxy: {
      '/mock': {
        target: 'http://qagw.qdingnet.com',
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
