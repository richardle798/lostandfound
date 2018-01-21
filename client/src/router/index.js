import Vue from 'vue'
import Router from 'vue-router'
import LostForm from '@/components/LostForm'
import LostSimilarItems from '@/components/LostSimilarItems'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
