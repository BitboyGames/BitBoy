import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BitBoy Games'
    }
  },

  {
    path: '/solana',
    name: 'Solana',
    component: () => import(/* webpackChunkName: "solana" */ '../views/solana/index'),
    meta: {
      title: 'BitBoy Games'
    }
  }

 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
