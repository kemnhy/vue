<template>
  <div class="card">
    <h2>예약 결제</h2>
    <p>이름:{{ reserVation.name }}</p>
    <p>날짜:{{ reserVation.date }}</p>
    <p>서비스:{{ reserVation.service }}</p>
    <p>결제금액:{{ price.toLocaleString() }}</p>
    <!-- 결제 버튼 클릭하면 결제 완료 페이 함수가 실행이 됨 -->
    <button class="btn btn--secondary" @click="pay">결제 하기</button>
  </div>
</template>
<script setup>
const props = defineProps({
  reserVation: { type: Object, required: true },
});
const emit = defineEmits(["next"]);

// 개체 금액
const price = props.reserVation.service === "짐 보관" ? 10000 : 20000;
const pay = () => {
  emit("next", { ...props.reserVation, price, status: "결제 완료" });
};
</script>
