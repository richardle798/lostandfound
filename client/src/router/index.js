import Vue from 'vue'
import Router from 'vue-router'
import LostForm from '@/components/LostForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LostForm',
      component: LostForm
    }
  ]
})
