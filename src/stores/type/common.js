const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 保存合同
  async saveContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.saveContract({ params, handleError: false })
    return data
  },
  // 查询合同
  async getContractById ({ commit }, { params = {} }) {
    const data = await $http.oasis.getContractById({ params })
    return data
  },
  // 提交合同
  async submitContract ({ commit }, { params = {} }) {
    const data = await $http.oasis.submitContract({ params, handleError: false })
    return data
  },
  // 查询费用延期
  async queryFeeDelay ({ commit }, { params = {} }) {
    const data = await $http.oasis.getFeeDelay({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 新增费用录入
  async createCost ({ commit }, { params = {} }) {
    const data = await $http.oasis.createContractCost({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 删除费用录入
  async deleteCost ({ commit }, { params = {} }) {
    const data = await $http.oasis.deleteContractCost({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 查询费用录入
  async queryCosts ({ commit }, { params = {} }) {
    const data = await $http.oasis.getContractCosts({
      params
    })
    return data
  },
  // 合同附件下载
  async downLoadFile ({ commit }, { params = {} }) {
    const data = await $http.oasis.downLoadContract({
      params
    })
    return data
  },
  // 获取系统配置项
  async getSysPropertyByKey ({ commit }, { params = {} }) {
    const data = await $http.oasis.getSysPropertyByKey({
      params,
      handleError: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 获取费项标准应收金额
  async getFeeStandardReceAmount ({ commit }, { params = {} }) {
    const data = await $http.oasis.getFeeStandardReceAmount({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 获取费项代收收款人列表
  async getFeeReceivers ({ commit }, { params = {} }) {
    const data = await $http.oasis.getFeeReceivers({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 获取费项税费信息
  async getFeeTax ({ commit }, { params = {} }) {
    const data = await $http.oasis.getFeeTax({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 获取费项金额
  async getFeeAmount ({ commit }, { params = {} }) {
    const data = await $http.oasis.getFeeAmount({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    return data
  },
  // 获取合同账单
  async queryContractBills ({ commit }, { params = {} }) {
    const data = await $http.oasis.queryContractBills({
      params,
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
