import { createRouter, createWebHistory } from 'vue-router'
import LayoutBasic  from '../views/containers/layouts/LayoutBasic.vue'

const routes = [
  {
    path: '/', 
    name: 'home', 
    component: LayoutBasic,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/containers/home/UserHome.vue')
      }
    ]
  }
]

// 必要に応じてfilterも実装する
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
