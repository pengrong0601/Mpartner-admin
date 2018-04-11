<template>
  <div>
    <page-text :pageText="pageText"></page-text>
    <div class="curMain"></div>
  </div>
</template>
<script>
import pageText from '@/base/page-text/page-text'
export default {
  components: {
    'page-text': pageText
  },
  data () {
    return {
      msg: '基础设置',
      pageText: '基础设置'
    }
  }
}
</script>
<style lang="less" scoped>
.curMain{
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
