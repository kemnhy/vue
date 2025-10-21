<template>
  <div class="box">
    <h2>로컬에 여러개 저장하기</h2>
    <!-- 입력창 -->
    <input v-model="name" placeholder="이름입력" />
    <input v-model="rating" type="number" min="1" max="5" placeholder="별점(1~5)" />
    <textarea v-model="text" placeholder="후기를 입력하세요."></textarea>
    <button @click="saveReview">리뷰 저장하기</button>
    <hr>
    <h3>저장된 리뷰 목록</h3>
    <!-- 저장된 리뷰가 없을때 -->
     <div class="no-review" v-if="message">
        {{ message }}
     </div>
     <!-- 저장된 리뷰가 있을때 -->
    <div v-else class="review" v-for="(review ,index) in reviews" :key="i">
        <p>이름 : {{ review.name }}</p>
        <p>별점 : {{ review.rating }}</p>
        <p>후기 : {{ review.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
const rating = ref("");
const text = ref("");
const reviews = ref([]);
// 페이지 켜질때 빈문자 ref
const message = ref("")
// console.log(reviews.value);
// 페이지가 켜질때 locostorage 에서 불러오기
onMounted(()=>{
    const saved = localStorage.getItem(reviews)
    // if(saved){
    //     reviews.value = JSON.parse(saved) //문자열을 배열로 
    // }else{
    //     message.value = "아직 저장된 리뷰가 없습니다."
    // }
    reviews.value = saved ? JSON.parse(saved) : [];
    message.value = saved ? "" : "아직 저장된 리뷰가 없습니다.";
});

// 리뷰 저장 하기
const saveReview = () => {
  const newReview = {
    name: name.value,
    rating: rating.value,
    text: text.value,
  };
  // 배열에 새 리뷰 추가
  reviews.value.push(newReview);
//   지정된 리뷰가 있으면 안내문구 제기
message.value = ""
  localStorage.setItem("reviews", JSON.stringify(reviews.value));
  alert("리뷰가 저장되었어요!");
  // 입력창 비우기
  name.value = "";
  rating.value = "";
  text.value = "";
};
</script>

<style scoped>
.box {
  width: 320px;
  /* margin: 40px auto; */
  padding: 20px;
  background: #eef5ff;
  border-radius: 12px;
}
input,
textarea {
  width: 100%;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  background: #0a66c2;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
