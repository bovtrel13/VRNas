
<template>
  <router-link to="/" class="logo">
    <img class="logo__img" :src="`${basePath}assets/images/Logo.svg`" alt="logo">
  </router-link>
</template>
<script setup>
const basePath = `${import.meta.env.BASE_URL}`;

</script>
<style lang="scss" scoped>
.logo {
  display: block;
  width: 101px;
  height: 30px;
}
.logo__img {
  width: 100%;
  height: 100%;
}
</style>