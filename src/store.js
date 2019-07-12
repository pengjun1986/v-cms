import { tranCommunities } from './utils'

import type from './stores/type'

const modules = {
  type
}

const state = {
  mask: false, // 全局遮罩（app.vue）
  loading: false, // 全局loading（app.vue）
  delayLoadingMs: 3000, // 配合loading使用，控制接口请求多少毫秒后显示loading
  user: {}, // 当前登录用户
  id: '', // 合同ID（0：新增状态，其它值为编辑状态）
  communityCode: '', // 小区编码
  communityName: '', // 小区名称
  customerCode: '', // 客户编码
  customerName: '', // 客户名称
  feeCode: '', // 费项编码
  feeName: '', // 费项名称
  standardCode: '', // 标准编码
  standardName: '', // 标准名称
  communities: [], // 小区列表
  fees: [], // 费项列表
  places: [], // 可选房号/车位列表
  pageFeeStandard: {
    total: 0,
    list: []
  }, // 费项标准分页
  pageCustomer: {} // 客户分页
}

const getters = {
  getCommunities: state => {
    return state.communities
  },
  getPageCustomer: state => {
    return state.pageCustomer
  }
}

const mutations = {
  SET_MASK (state, mask = false) {
    state.mask = mask
  },
  SET_LOADING (state, loading = false) {
    state.loading = loading
  },
  SET_USER (state, user = {}) {
    state.user = user
  },
  SET_ID (state, id = 0) {
    if (typeof id === 'string') {
      id = parseInt(id)
    }
    state.id = id
  },
  SET_COMMUNITY_CODE (state, code = '') {
    state.communityCode = code
  },
  SET_COMMUNITY_NAME (state, name = '') {
    state.communityName = name
  },
  SET_CUSTOMER_CODE (state, code = '') {
    state.customerCode = code
  },
  SET_CUSTOMER_NAME (state, name = '') {
    state.customerName = name
  },
  SET_FEE_CODE (state, code = '') {
    state.feeCode = code
  },
  SET_FEE_NAME (state, name = '') {
    state.feeName = name
  },
  SET_STANDARD_CODE (state, code = '') {
    state.standardCode = code
  },
  SET_STANDARD_NAME (state, name = '') {
    state.standardName = name
  },
  SET_COMMUNITIES (state, communities = []) {
    state.communities = communities
  },
  SET_FEES (state, fees = []) {
    state.fees = fees
  },
  SET_PLACES (state, places = []) {
    state.places = places
  },
  SET_PAGE_FEE_STANDARD (state, pageFeeStandard = {}) {
    state.pageFeeStandard = pageFeeStandard
  },
  SET_PAGE_CUSTOMER (state, pageCustomer = {}) {
    state.pageCustomer = pageCustomer
  }
}

const actions = {
  // 显示顶部提示
  showToast ({ commit }, { type = 'success', message = '操作成功~' }) {
    if (!parent || !parent.long) {
      ELEMENT.Message({
        type,
        message
      })
      return
    }
    let data = {
      time: 5000,
      icon: 1,
      anim: 6,
      offset: '30px',
      closeBtn: false,
      skin: 'demo-class'
    }
    if (type === 'warning') {
      data.icon = 7
    } else if (type === 'error') {
      data.icon = 2
    } else {
      data.anim = 5
    }
    // 7 warning, 1 success, 2 error
    parent.long.layer.msg(message, data)
  },
  // 显示警告窗口
  async showAlert ({ commit }, { title = '提示', message = '操作成功~', buttonText = '知道了', isTip = false }) {
    let config = {
      customClass: 'qd__alert',
      title,
      message,
      center: true,
      showClose: false,
      confirmButtonText: buttonText
    }
    if (isTip) {
      config.dangerouslyUseHTMLString = true
      config.message = `
        <span title="${message}">${message}</span>
      `
    }
    await ELEMENT.MessageBox(config)
  },
  // 显示确认窗口
  showConfirm ({ dispatch, commit }, { title = '提示', message = '操作成功~', buttonText = '确认', yes, no }) {
    ELEMENT.MessageBox({
      customClass: 'qd__alert',
      title,
      message,
      center: true,
      showClose: false,
      showCancelButton: true,
      confirmButtonText: buttonText,
      callback: action => {
        if (action === 'confirm' && typeof yes === 'function') {
          yes()
        }
        if (action === 'cancel' && typeof no === 'function') {
          no()
        }
      }
    })
  },
  // 显示确认窗口
  showReason ({ dispatch, commit }, {
    title = '原因', inputPlaceholder = '请填写原因', inputPattern = /\S+/, inputErrorMessage = '必须填写原因', inputType = 'text',
    buttonText = '确认', yes, no
  }) {
    ELEMENT.MessageBox.prompt(null, title, {
      customClass: 'qd__alert',
      center: true,
      showClose: false,
      inputType,
      inputPlaceholder,
      inputPattern,
      inputErrorMessage,
      callback: (action, instance) => {
        if (action === 'confirm' && typeof yes === 'function') {
          yes(instance.inputValue)
        }
        if (action === 'cancel' && typeof no === 'function') {
          no()
        }
      }
    })
  },
  // 显示全局遮罩
  showMask ({ commit }, autoHideMs = 0) {
    commit('SET_MASK', true)
    if (autoHideMs > 0) {
      setTimeout(() => {
        commit('SET_MASK', false)
      }, autoHideMs)
    }
  },
  // 隐藏全局遮罩
  hideMask ({ commit }) {
    commit('SET_MASK', false)
  },
  // 显示全局Loading
  showLoading ({ commit }, autoHideMs = 0) {
    commit('SET_LOADING', true)
  },
  // 隐藏全局Loading
  hideLoading ({ commit }) {
    commit('SET_LOADING', false)
  },
  // 设置客户分页
  async setUser ({ commit }) {
    const { userId: id, userName: name, organId } = await $http.oasis.getUser({})
    commit('SET_USER', { id, name, organId })
  },
  // 设置小区列表
  async setCommunities ({ commit }, params = {}) {
    commit('SET_COMMUNITIES', tranCommunities(await $http.oasis.getCommunities({ params })))
  },
  // 设置费项列表
  async setFees ({ commit }, params = {}) {
    commit('SET_FEES', await $http.oasis.getFees({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }))
  },
  // 设置费项标准分页
  async setPageFeeStandard ({ commit }, params = {}) {
    const {
      totalCount: total,
      resultList: list
    } = await $http.oasis.pageFeeStandard({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    commit('SET_PAGE_FEE_STANDARD', { total, list })
  },
  // 设置客户分页
  async setPageCustomer ({ commit }, params = {}) {
    commit('SET_PAGE_CUSTOMER', await $http.oasis.getCustomers({
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }))
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: debug
})
