<template>
  <div>
    <button>눌러봐 {{ count }}</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
// ref() - 반응형 변수
// vue가 값을 기억하고, 바뀌면 화면도 자동으로 바뀜
const count = ref(0);
</script>
<style scoped></style>
