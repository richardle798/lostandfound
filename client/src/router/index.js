import Vue from 'vue'
import Router from 'vue-router'
import LostForm from '@/components/LostForm'
import LostSimilarItems from '@/components/LostSimilarItems'
import LoggedForm from '@/components/LoggedForm'
import LostList from '@/components/LostList'
import FoundList from '@/components/FoundList'
import LoggedList from '@/components/LoggedList'
import LoggedSimilarItems from '@/components/LoggedSimilarItems'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/lost/form',
      name: 'LostForm',
      component: LostForm
    },
    {
      path: '/lost/similar-items',
      name: 'LostSimilarItems',
      component: LostSimilarItems,
      props:true
    },
    {
      path: '/logged/similar-items',
      name: 'LoggedSimilarItems',
      component: LoggedSimilarItems,
      props:true
    },
    {
      path: '/logged/form',
      name: 'LoggedForm',
      component: LoggedForm
    },
    {
      path: '/lost',
      name: 'LostList',
      component: LostList
    },
    {
      path: '/found',
      name: 'FoundList',
      component: FoundList
    },
    {
      path: '/logged',
      name: 'LoggedList',
      component: LoggedList
    },
  ]
})
