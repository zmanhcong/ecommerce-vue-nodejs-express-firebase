<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <div class="cart-left">
          <img :src="item.imageUrl" class="cart-img" />
          <div class="cart-desc">
            <h2 class="cart-title">{{ item.name }}</h2>
            <h4 class="cart-price">Price: ${{ item.price }}</h4>
          </div>
        </div>
        <div class="cart-right">
          <button class="cart-button" @click="removeFromCart(item.id)">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "CartPage",
  setup() {
    const cartItems = ref([]);
    const route = useRoute();
    const productId3f = ref(route.params.id);

    const fetchCartItems = async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/api/users/12345/cart`
      );
      cartItems.value = data;
    };
    onMounted(() => {
      fetchCartItems();
    });

    // remove from cart
    const removeFromCart = async (productId) => {
      await axios.delete(
        `${process.env.VUE_APP_BASE_URL}/api/users/12345/cart/${productId}`
      );
      //update cart items by filter
      cartItems.value = cartItems.value.filter((item) => item.id !== productId);
      console.log("removed from cart");
    };

    return { cartItems, removeFromCart, productId3f };
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
.cart-item {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.cart-left {
  display: flex;
  align-items: center;
  width: 50%;
  gap: 10px;
  margin-top: 20px;
}

.cart-right {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.cart-img {
  height: 100px;
  width: 100px;
  display: inline-block;
}

.cart-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.cart-title {
  margin: 0;
}

.cart-price {
  font-weight: 400;
  margin-top: 10px;
}
</style>
