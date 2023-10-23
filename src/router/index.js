import Vue from 'vue'
import Router from 'vue-router'
import LF from '@/views/LF'
import VTest from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/t2'
    },
    {
      path: '/lf',
      name: 'LF',
      component: LF
    },
    {
      path: '/t2',
      name: 't2',
      component: VTest
    }
  ]
})
