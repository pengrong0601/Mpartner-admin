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
      msg: '店铺管理',
      pageText: '店铺管理'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
