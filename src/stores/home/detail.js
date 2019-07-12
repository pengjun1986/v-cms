const state = {}

const getters = {}

const actions = {
  // 确认合同
  async confirmContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.confirmContractById({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 取消确认合同
  async unConfirmContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.unConfirmContractById({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 查询合同账单状态
  async queryContractBillState ({ commit }, { params = {} }) {
    const data = await $http.oasis.queryContractBillState({
      params
    })
    return data
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
