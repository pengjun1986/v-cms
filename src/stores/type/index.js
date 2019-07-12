import common from './common'

const modules = {
  common
}

const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 保存合同
  async query ({ commit }, { params = {} } = {}) {
    const data = await $http.gateway.typeQuery({ params, handleError: false })
    return data
  },
  // 保存合同
  async save ({ commit }, { params = {} } = {}) {
    const data = await $http.gateway.typeSave({ params, handleError: false })
    return data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules
}
