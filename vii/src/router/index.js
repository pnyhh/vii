import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/resource/Homepage'
import Map from '@/components/map/Map'
import Me from '@/components/me/Me'
import Order from '@/components/order/Order'
import Ad from '@/components/common/Ad'
import Login from '@/components/me/Login'
import Register from '@/components/me/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Ad' }
    },
    {
      path: '/ad',
      name: 'Ad',
      component: Ad
    },
    {
      path: '/resource',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/map',
      name: "map",
      component: Map
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },{
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
