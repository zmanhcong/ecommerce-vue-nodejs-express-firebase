<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
