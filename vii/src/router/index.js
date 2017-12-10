import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/resource/HelloWorld'
import Map from '@/components/map/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'HelloWorld' }
    },
    {
      path: '/resource',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      name: "map",
      component: Map
    }
  ]
})
