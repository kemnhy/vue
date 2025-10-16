<template>
  <div class="home">
    <!-- 텝 메뉴 -->
    <div class="tabs">
      <button @click="activeTab = 'detaile'">상세 정보</button>
      <button @click="activeTab = 'review'">리뷰</button>
      
    </div>
    <!-- 상세정보 -->
     <div class="content" v-if="activeTab === 'detaile'">
        상세정보 영역
     </div>
     <!-- 리뷰 -->
      <div class="content" v-if="activeTab === 'review'">
        리뷰영역
      </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref("detaile");
</script>
<style lang="scss" scoped>

</style>
