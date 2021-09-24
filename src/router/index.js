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
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 67b0efe1c4b9a79817ec70d2440067d2e3f8e18f
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
