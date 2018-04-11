<template>
  <div class="left-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
        :router="true"
        background-color="#344267"
        class="el-menu-vertical-demo"
        text-color="#FFFFFF"
        active-text-color="#49CEB9"
        :default-active="curRouter">
          <el-menu-item index="/Main/baseSetting">
            <!-- <i class="icon-dian"></i> -->
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/Main/userManage">
            <!-- <i class="icon-dian"></i> -->
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/Main/articleManage">
            <!-- <i class="icon-dian"></i> -->
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="/Main/storeManage">
            <!-- <i class="icon-dian"></i> -->
            <span slot="title">店铺管理</span>
          </el-menu-item>
          <el-menu-item index="/Main/withdrawManage">
            <!-- <i class="icon-dian"></i> -->
            <span slot="title">提现管理</span>
          </el-menu-item>
          <el-submenu index="/Main/baseSetting" class="xiala">
            <template slot="title">
              <!-- <i class="icon-dian"></i> -->
              <span slot="title" style="font-size:16px;">统计</span>
            </template>
            <el-menu-item index="/Main/statistics">金额统计</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '左边菜单栏',
      curRouter: '/Main/baseSetting'
    }
  },
  methods: {
    isTab () {
      let routerName = this.$route.path
      switch (routerName) {
        case '/Main/baseSetting':
          this.curRouter = '/Main/baseSetting'
          break
        case '/Main/userManage':
          this.curRouter = '/Main/userManage'
          break
        case '/Main/articleManage':
          this.curRouter = '/Main/articleManage'
          break
        case '/Main/storeManage':
          this.curRouter = '/Main/storeManage'
          break
        case '/Main/withdrawManage':
          this.curRouter = '/Main/withdrawManage'
          break
        case '/Main/statistics':
          this.curRouter = '/Main/statistics'
          break
        default:
          break
      }
    }
  },
  watch: {
    '$route': 'isTab'
  },
  created () {
    this.isTab()
  }
}
</script>
<style lang="less" scoped>
.left-nav{
  .el-menu{
    border-right: 0px;
  }
  width: 200px;
  ul{
    li{
      font-size: 16px;
    }
  }
}
</style>
<style lang='less'>

</style>
