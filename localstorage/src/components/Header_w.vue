<template>
  <div>
    <router-link to="/comfirm">예약확인</router-link> | <router-link to="/">home</router-link> | <router-link to="/reserve">예약하기</router-link> 

    <!-- 로그인 상태에 따라 변경 -->
    <span v-if="loggedInUser">{{loggedInUser}}님 !!<button>로그아웃</button></span>
    <span>
      <router-link to="/login">로그인</router-link>
      <router-link to="/signup">회원가입</router-link> |
     
    </span>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const loggedInUser = ref(null)
// 로그인 상태 체크
const checkLogin = ()=>{
  const user = localStorage.getItem("loggedInUser");
  loggedInUser.value = user ? user : null;
};
// 페이지가 열릴때 한번 실행 하는걸 해주는
onMounted (()=>{
   checkLogin();
});
// 로그아웃 
const logout = ()=>{
  localStorage.removeItem("loggedInUser")
  alert("로그아웃 되었습니다.")

}
</script>

<style scoped></style>
