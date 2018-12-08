import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import AuthRequesters from '@/pages/authrequesters'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/authrequesters',
      name: 'AuthRequesters',
      component: AuthRequesters,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ]
})
