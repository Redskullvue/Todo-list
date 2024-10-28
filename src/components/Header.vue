<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="../assets/logo.png" alt="logo" />
        <h1>Vue TODOS</h1>
      </div>
      <ul class="nav-routes">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  width: 100%;
  background-color: #f1f1f1;
}
nav {
  display: Flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 16px;
}
.branding {
  display: flex;
  align-items: center;
  gap: 8px;
}
img {
  max-width: 50px;
}
h1 {
  font-size: 24px;
}

.nav-routes {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
