// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: {
      title: 'BitBoy Games'
    }
  },
  {
    path: '/solana',
    name: 'Solana',
    component: () => import(/* webpackChunkName: "solana" */ '@/views/solana/index'),
    meta: {
      title: 'BitBoy Games'
    }
  },
  {
    path: '/rush-map-editor',
    name: 'Solana',
    component: () => import(/* webpackChunkName: "editor" */ '@/views/editor/index'),
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
