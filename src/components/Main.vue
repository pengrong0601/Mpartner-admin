<template>
  <div class="mainConent">
    <div class="header">
      <top-nav></top-nav>
    </div>
    <div class="content">
      <div class="left-navList">
        <left-nav></left-nav>
      </div>
      <div class="mianBox">
        <div class="mainBoxContent">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from '@/components/top-nav/top-nav'
import LeftNav from '@/components/left-nav/left-nav'
export default {
  components: {
    'top-nav': TopNav,
    'left-nav': LeftNav
  },
  data () {
    return {
      msg: '我是主页'
    }
  }
}
</script>
<style lang='less' scoped>
.mainConent {
  .header{
    width: 100%;
    height: 61px;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 100;
  }
  .content{
    position: absolute;
    top: 61px;
    bottom: 0;
    width: 100%;
    display: flex;
    .left-navList{
      background-color: #344267;
    }
    .mianBox{
      flex: 1;
      background: #EFEEF1;
      padding: 0 20px 20px 20px;
      .mainBoxContent{
        background: white;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
