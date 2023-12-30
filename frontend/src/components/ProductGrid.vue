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
import ProductGridItem from "@/components/ProductGridItem.vue";

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
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 16px;
  gap: 16px;
}
</style>
