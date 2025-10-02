<template>
  <div>
    <h2>v-bind 시작</h2>
  </div>

  <!-- v-bind란? html 속성에 변수(데이터)를 연결해주는 도구 묶어준다. -->
  <!-- <img src="" alt=""> -->
  <img :src="img" alt="이미지" />
  <img :src="img1" alt="이미지">
</template>

<script setup>
import { ref } from "vue";
// 이미지 저장을 변수 저장
const img = ref("https://picsum.photos/id/1020/200/150");
const img1 = ref("https://picsum.photos/id/1021/200/150")
</script>
<style scoped></style>
