<template>
  <p>이름 : {{ user.name }} , 나이 : {{ user.age }} 살</p>
  <button @click="user.age++">나이 증가</button>
  <button @click="user.name = '김노현'">이름 변경</button>
</template>
<script setup>
import { reactive } from "vue";

import(reactive);
const user = reactive({
  name: "홍길동",
  age: 20,
});
console.log(user.name);
function changeName() {
  if ((user.name = "홍길동")) {
    user.name = "김노현";
  }else{
    user.name = "홍길동;"
  }
}
</script>
<style scoped></style>
