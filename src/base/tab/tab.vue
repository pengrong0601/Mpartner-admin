<template>
  <div class="tab">
    <el-button-group>
      <el-button ref="tabBtn" type="primary" size="small" v-for="item in tabList" :key="item.tabName" @click.stop="goto(item.path)">
        {{item.tabName}}
      </el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  props: ['tabList'],
  data () {
    return {
      type: 'primary'
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    },
    change () {
      let urls = this.$route.path
      let self = this
      this.$props.tabList.forEach((item, index) => {
        if (item.path === urls) {
          self.$refs.tabBtn[index].$el.className = 'el-button el-button--primary el-button--small'
        } else {
          self.$refs.tabBtn[index].$el.className = 'el-button el-button--info el-button--small'
        }
      })
    }
  },
  mounted () {
    this.change()
  },
  watch: {
    '$route': 'change'
  }
}
</script>
<style lang="less" scoped>
  .tab {
    .el-button {
      border-radius: 0;
    }
    // .el-button + .el-button {
    //   margin-left: 3px;
    // }
  }
</style>
