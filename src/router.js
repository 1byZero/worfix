import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue'),

  },

  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },

  {
    path: '/marketplace',
    name: 'Marketplace',
    component: () => import('@/pages/Marketplace.vue'),
  },


  {
    name: 'Login',
    path: '/log-in',
    component: () => import('@/pages/Login.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn && to.name !== 'Home' && to.name !== 'About' && to.name !== 'Marketplace') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
