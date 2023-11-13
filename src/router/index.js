import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: () => import('../views/FacultyView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authNotRequiredRoutes = ["Login", "Register"]
  const _isAuthenticated = store.getters._isAuthenticated
  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false)
  } else {
    next()
  }
})

export default router