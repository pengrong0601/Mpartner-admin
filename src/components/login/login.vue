<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
// import {allUrl} from '@/router/allUrl'
export default {
  data () {
    return {
      msg: '登录'
    }
  },
  methods: {
    // login () {
    //   let me = this
    //   me.$post(allUrl.login, {
    //     userName: 'pengrong',
    //     password: '123456',
    //     code: '123244'
    //   }).then(res => {
    //     if (res.success) {

    //     }
    //   })
    // }
  },
  created () {
    // this.login()
  }
}
</script>
<style lang="less" scoped>

</style>
