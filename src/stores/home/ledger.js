const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 获取合同分页
  async pageContracts ({ commit }, { params = {}, handleLoading = true }) {
    const data = await $http.oasis.pageContracts({ params, handleLoading })
    return data
  },
  // 获取合同费用分页
  async pageContractCosts ({ commit }, { params = {} }) {
    const data = await $http.oasis.pageContractCosts({ params })
    return data
  },
  // 查询新增合同权限
  async queryContractAddAuth ({ commit }) {
    const data = await $http.oasis.queryContractAddAuth({})
    return data
  },
  // 删除合同
  async deleteContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.deleteContractById({
      params,
      handleError: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 关闭合同
  async closeContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.closeContractById({
      params,
      handleError: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
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
