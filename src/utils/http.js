import qs from 'qs'
import * as services from './services'
import store from '../store'

(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else {
    if (typeof define === 'function' && define.amd) {
      define(factory)
    } else {
      global = global || self
      global.$http = factory()
    }
  }
}(this, function () {
  'use strict'
  let instance = axios.create({
    timeout: 10000,
    withCredentials: true
  })

  instance.interceptors.request.use(config => {
    if (config.method === 'post' || config.method === 'put') {
      if (config.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') === 0) {
        config.data = qs.stringify(config.data)
        return config
      }
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use(({ config, data = { code: 500 }, headers, status }) => {
    // handleError 是否统一处理错误
    if (config.handleError) {
      if (data.code === 200) {
        return data.data
      } else {
        const message = data.message || '接口请求错误'
        store.dispatch('showToast', { type: 'error', message })
        return Promise.reject(message)
      }
    } else {
      return data
    }
  }, error => {
    // if (instance.isCancel(error)) { // 主动取消
    if (error.code === 'ECONNABORTED') { // 网络请求超时，请求被终止
      store.dispatch('showToast', { type: 'error', message: '网络请求超时，请稍后重试' })
    } else { // 其他异常
      store.dispatch('showToast', { type: 'error', message: '接口请求异常，请稍后重试' })
    }
    return Promise.reject(error)
  })

  let $http = {}

  const defaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
  Object.keys(services).forEach(serviceName => {
    const service = services[serviceName]
    const domain = service.domain
    $http[serviceName] = {}
    Object.keys(service).forEach(apiName => {
      if (apiName === 'domain') {
        return
      }
      const api = service[apiName]
      const apiMethod = api.method || 'get'
      const apiUrl = api.url
      $http[serviceName][apiName] = async ({ params = {}, headers = defaultHeaders, handleError = true, handleLoading = true }) => {
        let rsp = {}
        // store.dispatch('showMask')
        // store.dispatch('showLoading')
        if (apiMethod === 'get') {
          try {
            rsp = await instance[apiMethod](domain + apiUrl, { params, headers, handleError })
          } catch (error) {
            if (handleError && handleLoading) {
              throw new Error(error)
            } else {
              console.error(error)
            }
          }
        } else {
          try {
            rsp = await instance[apiMethod](domain + apiUrl, params, { headers, handleError })
          } catch (error) {
            if (handleError && handleLoading) {
              throw new Error(error)
            } else {
              console.error(error)
            }
          }
        }
        return rsp
      }
    })
  })
  return $http
}))
