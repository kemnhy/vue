<template>
    <div>
     
     <button @click="score++">점수 올리기</button>
     <button @click="score--">점수 내리기</button>
     <hr>
     <p>현재 점수 : {{ score }}</p>
     <p>이전 점수 : {{ oldScore }}</p>
     <p>새 점수 : {{ newScore }}</p>
    </div>
  
</template>
<script setup>
import { ref, watch } from 'vue';
// 1.감시할 값 (현재 점수)
const score = ref(0)
const newScore = ref("");
const oldScore = ref("");
// 2. watch()로 점수를 감시하기
watch(score ,(newVal , oldVal)=>{
  // console.log("점수가 바뀌었어요~");
  // console.log(`이전점수 : ${oldVal} => 새점수 : ${newVal}`);
  oldScore.value = oldVal;
  newScore.value = newVal;
  if(newVal >= 10){
    alert("우와! 점수가  10점 이상이에요 목표달성!!!")
  }

  
})
</script>
<style scoped>

</style>
