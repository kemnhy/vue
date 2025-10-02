<template>
  <!-- <p>{{ count }}</p> -->
  <p>{{ message }}</p>
  <button @click="changeMessage">글자 바꾸기</button>
  
  <div>
    <button @click="count++">눌러봐+ {{ count }}</button>
    
    <button @click="count1--">눌러봐- {{ count1 }}</button>
    <!-- <button @click="count1--">눌러봐- {{ count1 }}</button> -->
     <button @click="changeName">이름 변경{{ name }}</button>
  </div>
  <p>{{ name }}</p>
</template>
<script setup>
import { ref } from "vue";
// ref() - 반응형 변수
// vue가 값을 기억하고, 바뀌면 화면도 자동으로 바뀜
const count = ref(0);
const count1 = ref(0)
const message = ref("안녕 반가워 🤔")
const name = ref("노현 🍛")
// console.log(count);

// console.log(count.value);
// 더하기 기능 함수
function increase(){
  count.value++
}
// 빼기 기능 함수
function increase1(){
count1.value--
}
// 글자 바꾸기 함수
function changeMessage(){
  message.value = "만나서 반가워 🤗"

}
function changeName(){
  name.value = "김노현 🍤"
}
</script>
<style scoped></style>
