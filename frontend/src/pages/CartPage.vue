<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <div class="cart-left">
          <img :src="item.imageUrl" class="cart-img" />
          <div class="cart-desc">
            <h2 class="cart-title">{{ item.name }}</h2>
            <p class="cart-price">Price: ${{ item.price }}</p>
          </div>
        </div>
        <div class="cart_remove-btn">
          <button class="cart-button" @click="removeFromCart(item.id)">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
    <div class="cart-total">Total: ${{ totalPrice }}</div>

    <RouterLink :to="`/`">
      <button class="btn">Proceed to Checkout</button>
    </RouterLink>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "CartPage",
  setup() {
    const cartItems = ref([]);

    // fetch cart items
    onMounted(async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/api/users/12345/cart`
      );
      cartItems.value = data;
    });

    // remove from cart
    const removeFromCart = async (productId) => {
      await axios.delete(
        `${process.env.VUE_APP_BASE_URL}/api/users/12345/cart/${productId}`
      );

      //update cart items by filter
      cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    };

    // calculate total
    const totalPrice = computed(() => {
      return cartItems.value.reduce((acc, item) => {
        return acc + Number(item.price);
      }, 0);
    });

    return { cartItems, removeFromCart, totalPrice };
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  margin-top: 20px;
}

h1 {
  text-align: left;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}

h2,
h3,
h4 {
  margin: 0;
  padding: 0;
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

.cart_remove-btn {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: right;
  width: 50%;
}

.cart-img {
  height: 100px;
  width: 100px;
  display: inline-block;
}

.cart-desc {
  margin-left: 15px;
}
.cart-title {
  margin: 0;
}

.cart-price {
  font-weight: 400;
  margin-top: 10px;
  text-align: left;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
