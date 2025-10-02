<template>
  <div>
    <h2>링크 변경</h2>
    <a :href="linkUrl" target="_blank">네이버 이동</a>
    <button @click="changeLink">다음 이동</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const linkUrl = ref("https://www.naver.com");
const changeLink = () => {
  linkUrl.value = "https://www.daum.net";
};
</script>
<style scoped></style>
