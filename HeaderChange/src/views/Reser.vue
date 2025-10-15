<template>
  <div class="home">
    <h1>🏰 예약페이지</h1>
    <router-link to="/review" class="btn">리뷰보러가기</router-link>  
    <div class="section">
      <ReserHome v-if="step === 'form'" @next="goToPayment"/>
      <PayMent v-if="step === 'payMent'" :reserVation="reserVation" @next="gotocomfirm"/>
      <ReserComfirm  v-if="step === 'Comfirm'" :reserVation="reserVation" @reset="reserReser"/>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import ReserHome from '@/components/reservation/ReserHome.vue';
import PayMent from '@/components/reservation/PayMent.vue';
import ReserComfirm from '@/components/ReserComfirm.vue';
const step = ref("form")
const reserVation = ref({})
const goToPayment = (data)=>{
  console.log(data);
  reserVation.value = data;
  step.value= "payMent";

};
const gotocomfirm = (data)=>{
  reserVation.value = data;
   step.value= "Comfirm";


}
const reserReser = ()=>{
  reserVation.value = {}
  step.value = "form";
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgb(30, 30, 30);
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
}
</style>
