<template>
  <div>
    <!-- header -->
    <Header_W 
    :isDark ="isDarkHeader"
   
    />
    
    <!-- 페이지 내용 -->
     <router-view></router-view>
    <QuickTop />
  </div>
</template>
<script setup>
import { computed } from "vue";
import Header_W from "./components/Header_W.vue";
import QuickTop from "./components/QuickTop.vue";
import { useRoute } from "vue-router";
const isDarkHeader = computed(()=>["Review" ,"Reser"].includes(route.name))
const route = useRoute()
</script>

<style lang="scss" scoped></style>
