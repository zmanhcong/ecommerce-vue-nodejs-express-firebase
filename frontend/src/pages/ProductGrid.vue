<template>
  <div class="grid-wrap">
    <ProductGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductGridItem from "@/pages/ProductGridItem.vue";

export default {
  name: "ProductGrid",

  components: {
    ProductGridItem,
  },
  props: {
    products: Array,
  },
};
</script>

<style scoped>
.grid-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 16px;
  gap: 16px;
}
</style>
