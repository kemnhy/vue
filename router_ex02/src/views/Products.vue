
<template>
 <div>
    <h1>상품 목록</h1>
    <!-- 상품 리스트 -->
     <ul>
        <li @click="goDetail('사과' , 1000)">🍎사과</li>
        <li @click="goDetail('바나나' , 2000)">🍌바나나</li>
        <li @click="goDetail('딸기' , 3000)">🍓딸기</li>
     </ul>
 </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
// import { ref } from 'vue';

const router = useRouter()
const goDetail = (name, price)=>{


   router.push(`/products/${name}/${price}`);
}
</script>

<style scoped>

</style>
