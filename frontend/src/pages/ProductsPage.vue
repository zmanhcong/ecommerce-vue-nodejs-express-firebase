<template>
  <div id="page-wrap">
    <ProductGrid :products="products" />
  </div>
</template>

<script>
import ProductGrid from "@/components/ProductGrid.vue";
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
      const { data } = await axios.get("http://localhost:8001/api/products");
      products.value = data;
    };

    onMounted(() => {
      fetchProducts();
    });

    return { products };
  },
};
</script>

<style scoped></style>
