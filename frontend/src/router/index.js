import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.VUE_APP_BASE_URL,

  routes: [
    {
      path: "/products",
      meta: {
        layout: "default",
      },
      name: "Products",
      component: () => import("../pages/ProductsPage.vue"),
    },
    {
      path: "/",
      meta: {
        layout: "default",
      },
      name: "Products",
      component: () => import("../pages/ProductsPage.vue"),
    },
  ],
});

export default router;
