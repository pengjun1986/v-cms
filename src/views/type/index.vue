<template>
  <div :class="$style.container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>类别管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="line"></div>
    <el-button type="primary" @click="save">增加</el-button>
  </div>
</template>
<script>
const { mapActions } = Vuex.createNamespacedHelpers('type')

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.query()
  },
  methods: {
    ...mapActions({
      typeQuery: 'query',
      typeSave: 'save'
    }),
    async query () {
      await this.typeQuery()
    },
    async save () {
      await this.typeSave()
    }
  }
}
</script>

<style lang="less" module>
.container {
  min-height: 200px;
}
</style>
