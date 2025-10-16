<template>
  <div class="home">
    <h1>🏰홈 페이지</h1>
    <router-link to="/reser" class="btn">예약하러가기</router-link>
    <router-link to="/review" class="btn">리뷰보러 가기</router-link>
    <!-- 상품 목록 -->
    <div class="product-wrap">
      <h2>상품 목록</h2>
      <div class="product-list">
        <div class="product" v-for="(product,i) in products" :key="product.id"
        :class="{second: (i === 1) % 2 === 0}">
          <img @click="goToDetail(product.id)" :src="product.image" :alt="product.name">
          <p>상품명 : {{ product.name }}</p>
          <p>금액 : {{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    image: "/public/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    image: "/public/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    image: "/public/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    image: "/public/images/product4.png",
  },
]);
const router = useRouter()
const goToDetail = (id)=>{
  console.log(id);
  router.push(`/product-detail/${id}`)
  
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
  .product-list{
    display: flex;
    gap: 10px;
    justify-content: center;
    .product{
      cursor: pointer;
      &.second{
       background-color:red
      }
    }
  }
}
</style>
