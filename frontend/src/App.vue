<template>
  <Navbar />
  <div class="content">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 35px;
}

.content {
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
}

button {
  height: 50px;
  border-radius: 12px;
  background-color: #202b35;
  color: #fff;
  font-weight: 600;
  font-size: 19px;
  border: none;
  cursor: pointer;
}

button + button {
  margin-top: 12px;
}
</style>
