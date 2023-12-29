<template>
  <div>
    <h1>Product Page</h1>
    <ProductGrid :products="products" />
  </div>
</template>

<script>
import ProductGrid from "@/pages/ProductGrid.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "ProductPage",
  components: {
    ProductGrid,
  },
  setup() {
    const products = ref([]);
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/api/products`
      );
      products.value = data;
    };

    onMounted(() => {
      fetchProducts();
    });

    return { fetchProducts };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
