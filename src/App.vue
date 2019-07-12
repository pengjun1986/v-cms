<template>
  <!-- 全局遮罩（不可见的），防止重复提交 -->
  <div v-loading="mask" element-loading-spinner="none" element-loading-background="rgba(0, 0, 0, 0)" v-cloak>
    <!-- 全局loading，接口请求过慢时加载 -->
    <div id="app" ref="app" v-loading="loading">
      <div class="app-cont" style="margin-bottom:50px;">
        <keep-alive>
          <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: Vuex.mapState(['user', 'mask', 'loading']),
  created () {
    // this.setUser()
  },
  methods: {
    ...Vuex.mapActions({
      storeSetUser: 'setUser'
    }),
    // 设置当前登录用户信息
    async setUser () {
      const user = sessionStorage.getItem('user')
      if (!user) {
        await this.storeSetUser()
        sessionStorage.setItem('user', JSON.stringify(this.user))
        return
      }
      this.$store.commit('SET_USER', JSON.parse(user))
    }
  }
}
</script>

<style lang="less">
@import './assets/less/base.less';
@import './assets/less/reprint.less';
@import './assets/less/reset.less';
</style>
<style>
/* 阿里 iconfont */
@import url("//at.alicdn.com/t/font_929273_ie56h62iv7s.css");

html body #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
}

html body #app::-webkit-scrollbar-track-piece {
  /* 内层轨道，滚动条中间部分（位置4）*/
  background: #EBF1F5;
}

[v-cloak] {
  display: none;
}
</style>
