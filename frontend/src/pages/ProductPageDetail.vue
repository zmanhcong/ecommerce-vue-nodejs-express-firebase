<template>
  <div id="page-wrap">
    <div class="page-wrap" v-if="productDetail">
      <div class="img-wrap">
        <img :src="productDetail.imageUrl" />
      </div>
      <div class="" id="product-details">
        <h1>{{ productDetail.name }}</h1>
        <h3 id="price">${{ productDetail.price }}</h3>
        <p>Average rating: {{ productDetail.averageRating }}</p>

        <!-- Add to Cart -->
        <button
          id="add-to-cart"
          class=""
          v-if="!isAddtoCart && !alreadyInCart"
          @click="addToCart"
        >
          Add to Cart
        </button>

        <button id="add-to-cart" v-if="isAddtoCart" class="green-button">
          Successfully added to cart!
        </button>
        <button id="add-to-cart" v-if="alreadyInCart" class="grey-button">
          Item is already in cart
        </button>
        <h4>Description</h4>
        <p>{{ productDetail.description }}</p>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ProductPageDetail",

  setup() {
    const route = useRoute();
    const router = useRouter();

    const productId = ref(route.params.id);
    const productDetail = ref({});
    const fetchProductDetail = async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/api/products/${productId.value}`
      );
      productDetail.value = data;
    };

    onMounted(() => {
      fetchProductDetail();
    });

    // dummy user id
    const userId = ref("12345");
    const isAddtoCart = ref(false);

    const addToCart = async () => {
      await axios
        .post(
          `${process.env.VUE_APP_BASE_URL}/api/users/${userId.value}/cart`,
          {
            productId: productId.value,
          }
        )
        .then((response) => {
          console.log(response);
          isAddtoCart.value = true;

          // redirect to product page after 1s
          setTimeout(() => {
            router.push({ name: "ProductPage" });
          }, 1000);
        });
    };

    // get cart items
    const cartItems = ref([]);

    const fetchCartItems = async () => {
      const { data } = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/api/users/${userId.value}/cart`
      );
      cartItems.value = data;
    };

    onMounted(() => {
      fetchCartItems();
    });

    // check if item is in cart
    const alreadyInCart = computed(() => {
      return cartItems.value.some((item) => item.id === productId.value);
    });

    return {
      productDetail,
      productId,
      addToCart,
      isAddtoCart,
      alreadyInCart,
    };
  },
};
</script>

<style scoped>
.page-detail-content {
  max-width: 70%;
  margin: 0 auto;
}

#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}

.green-button {
  background-color: green;
}

.grey-button {
  background-color: #888;
}
</style>
