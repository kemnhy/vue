<template>
  <div>
   <h2>상품목록</h2>
   <div v-for="(product , i) in products" :key="i" class="product">
    <p>{{ product.name }} - {{ product.price }}원</p>
    <!-- v-if로 조건 걸기 -->
     <p v-if=" product.soldOut">❌품절</p>
     <p v-else class="instock">✅구매가능</p>
   </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const products = ref([
  { name: "아이스크림", price: 3000, soldOut: false },
  { name: "케이크", price: 15000, soldOut: true },
  { name: "콜라", price: 2000, soldOut: false },
]);
</script>
<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 8px;
  margin: 6px 0;
  background-color: #fff;
}
.soldout {
  color: red;
  font-weight: bold;
}
.instock {
  color: green;
  font-weight: bold;
}
</style>
