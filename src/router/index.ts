import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
