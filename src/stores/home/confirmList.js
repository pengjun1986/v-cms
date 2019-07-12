const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 获取合同分页
  async pageContracts ({ commit }, { params = {} }) {
    const data = await $http.oasis.pageContracts({ params })
    return data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
