const state = {
  districts: [],
  detail: []
}

const getters = {}

const actions = {
  async login ({ commit }, { scope, params = {} }) {
    // shop.getProducts(products => {
    //   commit('setProducts', products)
    // })
    await scope.$http.mock.login({
      params
    })
  },
  async getRoles ({ commit }, { scope, params = {} }) {
    await scope.$http.gateway.getRoles({
      params
    })
  },
  async getDistricts ({ commit }, { scope, params = {} }) {
    const { code, data, message } = await scope.$http.oasis.getDistricts({
      params
    })
    if (code === 200) {
      commit('SET_DISTRICTS', data)
    } else {
      alert(message)
    }
  },
  async getDetail ({ commit }, { scope, params = {} }) {
    const { code, data, message } = await scope.$http.oasis.getDetail({
      params
    })
    if (code === 200) {
      commit('SET_DETAIL', data)
    } else {
      alert(message)
    }
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },
  SET_DISTRICTS (state, districts = []) {
    state.districts = districts
  },
  SET_DETAIL (state, detail = []) {
    state.detail = detail
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
