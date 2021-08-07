import { createRouter, createWebHistory } from "vue-router"
import routes from './routes'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(async to => {
  document.title = to.meta.title as string
})

export default router
