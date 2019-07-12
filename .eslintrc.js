module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // custom configuration
  // global variables
  globals: {
    define: true,
    Vue: true,
    VueRouter: true,
    Vuex: true,
    axios: true,
    ELEMENT: true,
    moment: true,
    $http: true
  }
}
