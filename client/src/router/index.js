import Vue from 'vue'
import Router from 'vue-router'
import LostForm from '@/components/LostForm'
import LostSimilarItems from '@/components/LostSimilarItems'
import LoggedForm from '@/components/LoggedForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/lost',
      name: 'LostForm',
      component: LostForm
    },
    {
      path: '/lost/similar_items',
      name: 'LostSimilarItems',
      component: LostSimilarItems,
      props:true
    },
    {
      path: '/logged',
      name: 'LoggedForm',
      component: LoggedForm
    }
  ]
})
