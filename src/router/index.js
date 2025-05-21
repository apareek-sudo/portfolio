import { createRouter, createWebHashHistory } from 'vue-router'

// Using hash mode for better GitHub Pages compatibility
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    }
  ],
  // Custom scroll behavior for smooth scrolling to sections
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70 // Offset for fixed navbar
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router

