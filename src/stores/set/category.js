const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 获取合同分类列表树
  async getCategoryTree ({ commit }, { params = {} }) {
    const data = await $http.oasis.getCategoryTree({ params })
    return data
  },
  // 获取子级合同分类列表
  async getChildCategoriesById ({ commit }, { params = {} }) {
    const data = await $http.oasis.getChildCategoriesById({ params })
    return data
  },
  // 批量保存子级合同分类
  async saveCategories ({ commit }, { params = {} }) {
    await $http.oasis.saveCategories({ params })
  },
  // 删除合同分类
  async delCategoryById ({ commit }, { params = {} }) {
    await $http.oasis.delCategoryById({ params })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
