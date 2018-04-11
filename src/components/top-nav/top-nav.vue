<template>
  <div class="top-nav">
    <div class="leftLogo">
      <img src="../../assets/logo.png" alt="">
      <span>M合伙后台业务管理系统</span>
    </div>
    <div class="user">
      <img src="../../assets/logo.png" width="40" height="40" alt="">
      <span>{{ userName }}</span>
      <el-button type="text" @click="sign_out">退出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '张三'
    }
  },
  methods: {
    sign_out () {
      console.log(123)
    }
  }
}
</script>
<style lang='less' scoped>
.top-nav{
  .leftLogo{
    float: left;
    text-align: left;
    line-height: 61px;
    overflow: hidden;
    padding-right: 10px;
    img{
      width: 40px;
      height: 35px;
      display: inline-block;
      margin-left: 30px;
      margin-right: 10px;
    }
    span{
      font-size: 20px;
      color: #344267;
    }
  }
  .user{
      float: right;
      width: 280px;
      text-align: left;
      padding-top: 10px;
      color: #344267;
      .el-button{
        border: 0;
        outline: 0;
        background-color: white;
        font-size: 16px;
      }
      .el-button--text{
        color: #344267;
      }
      img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin: 0;
        padding: 0;
        margin-left: 30px;
      }
      span{
        color: #344267;
        margin-left: 10px;
        font-size: 18px;
        border-right: 1px solid #344267;
        padding-right: 20px;
        margin-right: 12px;
      }
    }
}

</style>
