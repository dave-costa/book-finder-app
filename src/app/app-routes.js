import { createRouter, createWebHistory } from 'vue-router'

import finderRoutes from './finder-home/finder.routes'
const routes = [
  ...finderRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
