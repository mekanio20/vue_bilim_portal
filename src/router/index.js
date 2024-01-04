import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: () => import('../views/FacultyView.vue')
    },
    {
      path: '/teachers',
      name: 'Teacher',
      component: () => import('../views/TeacherView.vue')
    },
    {
      path: '/students',
      name: 'Student',
      component: () => import('../views/StudentView.vue')
    },
    {
      path: '/teacher/detail',
      name: 'TeacherDetail',
      component: () => import('../views/TeacherDetail.vue')
    },
    {
      path: '/student/detail',
      name: 'StudentDetail',
      component: () => import('../views/StudentDetail.vue')
    },
  ]
})

export default router