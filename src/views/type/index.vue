<template>
  <div :class="$style.container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>类别管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="line"></div>
    <el-form inline class="form__ct" label-width="112px">
      <el-form-item label="名称:" prop="no">
        <el-input  :maxlength="16" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button type="primary" @click="save">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="line"></div>
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
