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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  gap: 30px;
  max-width: 70%;
}
</style>
