import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.VUE_APP_BASE_URL,

  routes: [
    {
      path: "/products",
      meta: {
        layout: "default",
      },
      name: "ProductPage",
      component: () => import("../pages/ProductsPage.vue"),
    },
    {
      path: "/",
      meta: {
        layout: "default",
      },
      name: "Home",
      component: () => import("../pages/ProductsPage.vue"),
    },
    {
      path: "/products/:id",
      meta: {
        layout: "default",
      },
      name: "product-details",
      component: () => import("../pages/ProductPageDetail.vue"),
    },
    {
      path: "/carts",
      meta: {
        layout: "default",
      },
      name: "carts",
      component: () => import("../pages/CartPage.vue"),
    },
  ],
});

export default router;
