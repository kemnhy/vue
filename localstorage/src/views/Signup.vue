<template>
  <div>
    <h2>👼회원가입</h2>
    <form @submit.prevent="signup">
      <input v-model="username" type="text" placeholder="이름입력" />
      <input v-model="userpw" type="text" placeholder="비밀번호" />
      <button type="submit">signup</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const username = ref("");
const userpw = ref("");
const signup = () => {
  const user = {
    username: username.value,
    userpw: userpw.value,
  };
  localStorage.setItem("user" , JSON.stringify(user));
  alert("회원가입 완료")
  router.push("/login")
};
</script>
<style lang="scss" scoped></style>
