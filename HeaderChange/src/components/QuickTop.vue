<template>
  <div>
    <button v-show="show" class="quick-top" @click="gotop">  ↑ </button>
   
    
  </div>
</template>
<script setup>
import { onMounted ,ref } from 'vue';

// gotop 상태를 저장
const show = ref(false);
// 스크롤을 체크해서 일정 높이 이상이면 버튼을 보이게 설정한다.
const handelScroll = ()=>{
show.value = window.scrollY > 200; //200px 이상이면 고탑버튼이 보이게 설정
};
// 맨위로 가기
const gotop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
onMounted(()=>{
    window.addEventListener("scroll" ,handelScroll );
});

</script>
<style lang="scss" scoped>
.quick-top {
  position: fixed;
  bottom: 30px;
  right: 20px;
   width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  background: #333;
  color: #fff;
  transition: all 0.2s;
  opacity: 0.8;
}
</style>
