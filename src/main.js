import app from './app.vue'
import router from './router'
import store from './store'

// 自定义http组件，暴露全局变量$http
import './utils/http'

import * as filters from './utils/filters'

Vue.config.productionTip = false

const processEnv = process.env
let $config = {}
Object.keys(processEnv).forEach(key => {
  if (key.indexOf('VUE_APP_') === 0) {
    const newKey = key.substring(8)
    $config[newKey] = processEnv[key]
  }
})

// 统一加载通用filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$config = $config // 区分环境的配置项

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
