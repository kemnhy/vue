<template>
  <div>
    <!-- 반응형 카드 -->
    <section class="p-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">상품 카드</h2>
      <div class="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        <div v-for="(cat, index) in cats" :key="index" class="bg-white p-6 rounded-2xl shadow-md text-center">
          <img :src="cat.img" :alt="cat.desc" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ cat.title }}</h3>
          <p class="text-gray-600 mb-3">{{ cat.desc }}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">자세히 보기</button>
        </div>
      </div>
      <img src="/public/images/고양이1.jpg" alt="프로필" class="w-24 h-24 rounded-full show md bg-pink-200 hover:scale-105 transition">
    </section>
  </div>
</template>
<script setup>
const cats = [
  {
    img: "/public/images/고양이1.jpg",
    title: "귀여운 고양이",
    desc: "포근한 털이 매력적이에요 🐾",
  },
  {
    img: "/public/images/고양이2.jpg",
    title: "졸린 고양이",
    desc: "자는 모습이 너무 귀여워요 😴",
  },
  {
    img: "/public/images/고양이3.jpg",
    title: "활발한 고양이",
    desc: "장난꾸러기예요 🧶",
  },
];
</script>

<style lang="scss" scoped></style>
