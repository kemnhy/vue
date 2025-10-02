<template>
  <div>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        {{ index + 1 }}.{{ item.name }} - {{ item.price.toLocaleString() }}원
      </li>
    </ul>
  </div>
  <!-- <p>1. 피자 12000 원</p> -->
</template>
<script setup>
import { ref } from "vue";
const products = ref([
  { name: "피자", price: 12000 },
  { name: "햄버거", price: 8000 },
  { name: "콜라", price: 2000 },
]);
</script>
<style scoped></style>
