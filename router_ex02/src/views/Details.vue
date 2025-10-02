

<template>
 <div>
    <h1>상품 상세 정보</h1>
    <p>상품 이름 : {{ name }}</p>
    <p>상품 가격: {{ price }}</p>
    <button @click="goBack">⬅️ 목록으로 돌아가기</button>
 </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
// useRoute() 현재 페이지 정보 가져오기
// 지금 페이지에 주소와 정보를 가져온다.
import { ref } from 'vue';
const route = useRoute();
//useRouter 다른페이지로 이동시킴
const router = useRouter()
// url 에시 params 가져오기
const name = ref(route.params.name);
const price = ref(route.params.price);
// 뒤로 돌아가기
const goBack = ()=>{
    router.back(); //바로 전 페이지로 이동 합니다. 뒤로가기와 같은 기능 입니다.

};
</script>
<style scoped>

</style>
