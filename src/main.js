// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store'
import ElementUI from 'element-ui'
import {axiosGet, axiosPost} from '@/store/http'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Axios.defaults.withCredentials = true
Vue.prototype.$ajax = Axios
Vue.prototype.$get = axiosGet
Vue.prototype.$post = axiosPost
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
