<template>
  <div class="product-grid-item">
    <RouterLink :to="`/products/${product.id}`">
      <img :src="product.imageUrl" />
    </RouterLink>
    <h3>{{ product.name }}</h3>
    <p>${{ product.price }}</p>
    <RouterLink :to="`/products/${product.id}`">
      <button>View Details</button>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "ProductGridItem",
  props: ["product"],
  components: { RouterLink },
};
</script>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-grid-item {
  box-shadow: 1px -3px 29px -5px rgba(0, 0, 0, 0.41);
  border-radius: 8px;
  padding: 20px;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
