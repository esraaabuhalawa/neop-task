// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home/Home.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import('../pages/ProductDetails/productDetails.vue'),
  },
 
  {
    path: '/:pathMatch(.*)*',
    name: 'errorPage',
    component: () => import('../pages/Error.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
