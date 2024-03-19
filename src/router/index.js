import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
    
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register', 
    component: () => import('../views/RegisterView.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfileView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
  },
  {
    path: '/checkout', 
    name: 'checkout', 
    component: () => import('../views/CartView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" });
      }
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
