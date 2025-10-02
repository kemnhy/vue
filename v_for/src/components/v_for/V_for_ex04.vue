

<template>
<div>
    <h2>⭐ 반복</h2>
    <span v-for="n in 5" :key="n">⭐</span>
    <div class="stars">
        <h3>⭐별 반쪽 예제</h3>
        <!-- 꽉 찬 별4개 -->
         <span v-for="n in 4" :key="n" class="star full">★</span>
         <!-- 빈별 -->
          <span class="star half">★</span>
    </div>
</div>


</template>
<script setup>

</script>
<style scoped>
.star{
    font-size: 24px;
    color: lightgray;
}
.full{
    color: gold;
}
.half{
    position: relative;
    display: inline-block;
    color: lightgray;
}
.half::before{
    content: "★";
    position: absolute;
    left: 0;
    width: 50%; 
    overflow: hidden; /*별 반틈만 보이게*/
    color: gold;
}
</style>
