// 统一网关
const gateway = {
  domain: process.env.VUE_APP_GATEWAY,
  typeSave: {
    method: 'post',
    url: '/type'
  },
  typeQuery: {
    url: '/type'
  }
}

export {
  gateway
}
