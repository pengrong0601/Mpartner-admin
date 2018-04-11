import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 登录页面
import Login from '@/components/login/login'
// 基础设置
import BaseSetting from '@/components/main/baseSetting/baseSetting'
// 用户管理
import UserManage from '@/components/main/userManage/userManage'
// 文章管理
import ArticleManage from '@/components/main/articleManage/articleManage'
// 店铺管理
import StoreManage from '@/components/main/storeManage/storeManage'
// 提现管理
import WithdrawManage from '@/components/main/withdrawManage/withdrawManage'
// 统计
import Statistics from '@/components/main/statistics/statistics'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Login'
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Main',
      component: Main,
      redirect: '/Main/baseSetting',
      children: [{
        path: 'baseSetting',
        name: BaseSetting,
        component: BaseSetting
      }, {
        path: 'userManage',
        name: UserManage,
        component: UserManage
      }, {
        path: 'articleManage',
        name: ArticleManage,
        component: ArticleManage
      }, {
        path: 'storeManage',
        name: StoreManage,
        component: StoreManage
      }, {
        path: 'withdrawManage',
        name: WithdrawManage,
        component: WithdrawManage
      }, {
        path: 'statistics',
        name: Statistics,
        component: Statistics
      }]
    }
  ]
})
