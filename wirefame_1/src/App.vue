<script setup>
import Footer_wrap from "./components/Footer_wrap .vue";
import Header_wrap from "./components/Header_wrap.vue";
import NoiceGallery from "./components/NoiceGallery.vue";
import Visul_1 from "./components/Visul_1.vue";
</script>

<template>
  <div class="wrap">
    <!-- 상단 -->
    <Header_wrap />
    <main>
      <div class="inner">
        <!-- 비주얼 -->
        <Visul_1 />
        <!-- 공지사항/갤러리 -->
        <NoiceGallery />
      </div>
    </main>

    <!-- 하단 -->
    <Footer_wrap />
  </div>
</template>

<style scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.inner {
  max-width: 1200px;
  margin: auto;
}
</style>
