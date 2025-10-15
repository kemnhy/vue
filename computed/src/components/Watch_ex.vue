<template>
    <div>
        <input type="text" @input="updateName" v-model="name" placeholder="이름 입력" />
  <p>안녕하세요 , {{ name }}님! 반가워요~</p>
  <hr />
  <h3>이름 감시</h3>
  <p>이전 이름: {{ oldName }}</p>
  <p>새 이름: {{ newName }}</p>
  <p>현재 이름: {{ name }}</p>
    </div>
  
</template>
<script setup>
import { nextTick, ref, watch } from "vue";

const name = ref("");
const oldName = ref(""); // 변경전 값을 저장
const newName = ref(""); //변경후 값을 저장
// 한글 이슈
const updateName = (event) => {
  nextTick(() => {
    name.value = event.target.value;
  });
};
// watch() - 데이터감시
// watch((name , (newName,oldName))=>{});
// 특정 데이터가 바뀔때 마다 실행되는 함수
// 데이터 감시
watch(name, (newVal, oldVal) => {
  // console.log(newVal);
  // console.log(oldVal);
  oldName.value = oldVal; //화면에 보이도록 ref에 저장
  newName.value = newVal; // 화면에 보이도록 ref에 저장
  
});
</script>
<style scoped></style>
