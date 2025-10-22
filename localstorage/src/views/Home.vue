<template>
  <div>
    <h2>🏠 홈</h2>
    <p v-if="loggedInUser">
      환영합니다. <b> {{loggedInUser}} </b>님!!
    </p>
    <p v-else>로그인이 필요합니다.</p>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const loggedInUser = ref(null);
onMounted(() => {
  loggedInUser.value = localStorage.getItem("loggedInUser");
});
</script>

<style scoped></style>