<template>
  <div>
    <h2>간단한 반복문</h2>
    <ul>
      <!-- v-for = "변수 in 배열" -->
      <li v-for="item in fruits" :key="item">{{ item }}</li>
    </ul>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">{{ index+1 }} . {{ item }}</li>
    </ul>
    
  </div>
</template>
<script setup>
import { ref } from "vue";
const fruits = ref(["사과", "바나나", "망고", "딸기"]);
const products = ref(["피자", "치킨", "햄버거"]);
// 글 배열
const posts = ref(["첫 번째 글", "두 번째 글", "세 번째 글"]);

// 메뉴 배열
const menus = ref(["홈", "상품", "문의", "로그인"]);
</script>
<style scoped></style>
