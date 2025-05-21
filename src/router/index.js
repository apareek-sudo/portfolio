import { createRouter, createWebHashHistory } from 'vue-router'

// Create router instance with hash mode for GitHub Pages compatibility
const router = createRouter({
  // Use hash mode for better GitHub Pages compatibility
  history: createWebHashHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      // App.vue is already imported in main.js, no need for dynamic import
      component: { template: '<div></div>' } // Empty component as App.vue is mounted at #app
    }
  ],
  
  // Custom scroll behavior for smooth scrolling to sections
  scrollBehavior(to, from, savedPosition) {
    // Add a small delay to ensure DOM is updated before scrolling
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          // Smooth scroll to hash with fixed header offset
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 70 // Offset for fixed navbar
          });
        } else if (savedPosition) {
          // Return savedPosition for browser back/forward navigation
          resolve(savedPosition);
        } else {
          // Scroll to top for other navigation
          resolve({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    });
  }
})

export default router
