<template>
  <div class="home">
    <div class="product-container">
      <!-- 상품이미지 -->
      <div class="image-section">
        <img :src="seclectImg" :alt="product.name" class="main-image" />
        <!-- 썸네일 -->
        <div class="thumbnails">
          <img v-for="(img, i) in product.images" :key="i" :src="img" class="thmb" @click="seclectImg = img" />
        </div>
      </div>
      <!-- 상품정보 -->
      <div class="info-section">
        <h1>{{ product.name }}</h1>
        <p>가격 : {{ product.price.toLocaleString() }}</p>
        <p>상품 설명 : {{ product.description }}</p>
        <!-- 수량 선택 -->
        <div class="quantity">
          <button @click="changeQuantity(-1)"><span>-</span></button>
          <input v-model="quantity" />
          <button @click="changeQuantity(1)"><span>+</span></button>
        </div>
        <!-- 총 금액 -->
        <p class="total-price">총 금액: {{ totalPrice.toLocaleString() }}</p>
        <!-- 찜하기 / 구매하기 버튼 -->
        <div class="buttons">
          <button class="like" @click="toggleLike">
            {{ liked ? "❤️ 찜하기 취소" : "🤍 찜하기" }}
          </button>
          <button class="buy" @click="showModal = true">구매하기</button>
        </div>
      </div>
    </div>
    <!-- 구매하기 클릭시 모달창 -->
    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal-content">
        <h2>구매 완료</h2>
        <p>{{product.name}}을(를){{quantity}}개 구매 하시겠습니까?</p>
        <p>총금액: {{totalPrice.toLocaleString()}}</p>
        <div class="buttons">
          <button class="like">취소</button>
          <button class="buy" @click="comfirmBtn">확인</button>
        </div>
      </div>
    </div>
    <!-- 상세 정보 -->
     <Tap/>
  </div>
</template>
<script setup>
import Tap from "@/components/Tap.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    description: "A 상품 설명",
    image: "/images/product1.png",
    images: ["/images/product1.png", "/images/product2.png", "/images/product3.png", "/images/product4.png"],
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    description: "B 상품 설명",
    image: "/images/product2.png",
    images: ["/images/product2.png", "/images/product2.png", "/images/product3.png", "/images/product4.png"],
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    description: "C 상품 설명",
    image: "/images/product3.png",
    images: ["/images/product3.png", "/images/product2.png", "/images/product3.png", "/images/product4.png"],
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    description: "D 상품 설명",
    image: "/images/product4.png",
    images: ["/images/product4.png", "/images/product1.png", "/images/product2.png", "/images/product3.png"],
  },
]);
const route = useRoute();
// 현재 선택된 상품 가져오기
const product = computed(() => {
  return (
    products.value.find(
      (p) => p.id == route.params.id
      // console.log(p);
    ) || {}
  );
});
// 선택된 이미지
const seclectImg = ref(product.value.images ? product.value.images[0] : "");
// 수량 상태
const quantity = ref(1);
// 수량 변경 함수
const changeQuantity = (amount) => {
  // console.log(amount);
  if (quantity.value + amount > 0 && quantity.value + amount <= 5) {
    quantity.value += amount;
  }
};
// 총금액
const totalPrice = computed(() => {
  return product.value.price * quantity.value;
});
// 찜하기
const liked = ref(false);
// 찜하기 토글버튼
const toggleLike = () => {
  liked.value = !liked.value;
};
// 구매하기 버튼 클릭시 
const comfirmBtn = ()=>{
    alert(`${product.value.name}을(를) ${quantity.value}개 구매완료 !!`);
}
// 구매하기 버튼
const showModal = ref(false)
// 구매 확인 버튼 클릭시 

</script>
<style lang="scss" scoped>
.product-container {
  display: flex;
  gap: 50px;
  max-width: 800px;
  margin: auto;
  padding: 50px 0;
  background-color: antiquewhite;
  .image-section {
    flex: 1;
    background-color: #fff;

    .main-image {
      border-radius: 10px;
      filter: brightness(1.1);
    }
    .thumbnails {
      display: flex;
      justify-content: center;
      gap: 10px;
      .thmb {
        width: calc(100% / 4);
      }
    }
  }
  .info-section {
    flex: 1;
    text-align: left;

    .quantity {
      display: flex;
      margin-top: 50px;
      button {
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
      }
      input {
        width: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
button {
  border: none;
  background-color: transparent;
  padding: 10px 20px;
}
.buttons {
  display: flex;
  gap: 5px;
  justify-content: center;
}
.like {
  background-color: gray;
}
.buy {
  background-color: #e63946;
  color: #fff;
}
/* 모달창 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
