<template>
  <div>
    <input  v-model="message" @input=" updateMessage" type="text" placeholder="메세지 입력" />
    <p>입력한 내용 :{{ message }}</p>
    <input v-model="discount" type="text" placeholder="할인금액">
    <p>할인 금액 : {{  discount }}</p>
  </div>
</template>
<script setup>
import { nextTick, ref } from 'vue';
const message = ref("");
const discount = ref("")
// 한글이슈에 대한 코드 
const updateMessage = ((event)=>{
    nextTick(()=>{
message.value = event.target.value;
    });
});

</script>
<style scoped></style>
