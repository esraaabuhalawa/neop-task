// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../pages/Home/index.vue'
import DefaultLayout from "../Layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/Home/index.vue"),
        meta: { specialNavbar: false },
      },
      {
        path: "products/:id",
        name: "product-details",
        component: () => import("../pages/ProductDetails/[id].vue"),
        meta: { specialNavbar: true },
      },
    ],
  },

  // Error page (no layout)
  {
    path: "/:pathMatch(.*)*",
    name: "errorPage",
    component: () => import("../pages/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

import { useUIStore } from "../store/uiStore";

router.beforeEach((to, from, next) => {
  const uiStore = useUIStore();
  uiStore.setLoading(true);
  next();
});

router.afterEach(() => {
  const uiStore = useUIStore();
  setTimeout(() => uiStore.setLoading(false), 1000); // smooth UX
});

export default router;
