import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// 状态管理
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
