<template>
  <div>
    <p>가격 : {{ formatNumber(price) }}원</p>
    <p>세금 : {{ tax }}원</p>
    <p>총합 : {{ formatNumber(total) }}</p>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

// import (ref)
// computed() - 계산된 값
// 다른 데이터를 개체에 따라 자동으로 값이 바뀌는 전용 변수
const price = ref(2500);
const tax = computed(() => {
  return price.value * 0.1;
});
// console.log(tax.value);
const total = computed(() => {
  return price.value + tax.value;
});
// 천단위 콤마 함수
const formatNumber = (num) => {
  return num.toLocaleString();
};
</script>

<style scoped></style>
