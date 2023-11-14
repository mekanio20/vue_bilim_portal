import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: () => import('../views/FacultyView.vue')
    },
    {
      path: '/students',
      name: 'Student',
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/student/detail',
      name: 'StudentDetail',
      component: () => import('../views/StudentDetail.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const authNotRequiredRoutes = ["Login", "Register"]
//   const _isAuthenticated = store.getters._isAuthenticated
//   if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
//     next(false)
//   } else {
//     next()
//   }
// })

export default router