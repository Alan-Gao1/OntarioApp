import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },    
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../views/SelectUniApplication.vue')
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('../views/Application.vue')
    },
    
  ]
});

// router.beforeEach((to, from) => {
//   if (to.name == 'search' || to.name == 'home') return true;
//   else return this.$auth0.isAuthenticated;
// });

export default router
