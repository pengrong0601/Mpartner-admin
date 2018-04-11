<template>
  <div>
    <page-text :pageText="pageText"></page-text>
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
      msg: '文章管理',
      pageText: '文章管理'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
