import { createRouter, createWebHistory } from '@ionic/vue-router';
import FirstPage from '../pages/FirstPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/first-page'
  },
  {
    path: '/first-page',
    component: FirstPage
  },
  {
    path: '/camera-page',
    component: FirstPage
  },
  {
    path: '/second-page/:id',
    component: () => import('../pages/SecondPage.vue')        // lazy loading - it will not be loaded on start, but when needed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
