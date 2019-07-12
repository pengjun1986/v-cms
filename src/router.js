// router lazy loading
const TypeIndex = () => import('./views/type/index') // 首页

const routes = [{
  path: '/', redirect: '/type'
}, {
  path: '/type', name: 'TypeIndex', component: TypeIndex
}]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {

})

export default router
