<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<!-- Due to the app being Small we wont be using external CSS files -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

* {
  font-family: "Rubik", serif;
  font-weight: 400;
  font-style: normal;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
