<template>
  <div class="page-text-content">
    <div class="page-text">
      <span>
        {{ pageText }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  props: {
    pageText: {
      type: String,
      default: '头部文字'
    }
  }
}
</script>
<style lang="less" scoped>
  .page-text-content{
    display: flex;
    flex-flow:row;
    justify-content:space-between;
    height: 49px;
    line-height: 49px;
    background-color: #EFEEF1;
    .page-text{
      font-size: 14px;
      color: #666666;
      span{
        border-left:4px solid #49CEB9;
        padding-left: 5px;
      }
    }
  }
</style>
