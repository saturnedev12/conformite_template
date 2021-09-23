import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Conformite from '../views/Conformite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/conformite',
    name: 'Conformite',
    component: Conformite
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
