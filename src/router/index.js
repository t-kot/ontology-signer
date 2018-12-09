import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import AuthRequesters from '@/pages/authrequesters'
import ThirdpartyOntid from '@/pages/thirdparty_ontid'

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
    {
      path: '/thirdparty/ontid',
      name: 'ThirdpartyOntid',
      component: ThirdpartyOntid,
    }
  ]
})
