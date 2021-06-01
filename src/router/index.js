import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import filmRouter from './film'
import centerRouter from './center'

Vue.use(VueRouter)

const routes = [
  cinemaRouter,
  filmRouter,
  centerRouter,
  {
    path: '*', //  通配符
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
