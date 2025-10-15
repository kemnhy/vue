<template>
  <div>
    <Product />

    <router-link to="/">예약하기</router-link> |
    <router-link to="/reser">예약하기</router-link>
  </div>
</template>
<script setup>
import Product from "./components/Product.vue";
</script>
<style scoped></style>
