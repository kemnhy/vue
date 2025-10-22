<template>
  <div>
    <h2>✅ 예약 목록</h2>
    <p>회원 : {{ loggedInUser }}</p>
    <div v-if="myReservations.length > 0">
      <ul>
        <li v-for="item in myReservations" :key="item.id">
          {{ item.name }} - {{ item.date }}
          <span v-if="isPast(item.date)">✅ 완료</span>
          <span v-else>⏳ 예약중</span>
          <button @click="cancelReservation(item.id)">❌ 취소</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>❌ 예약 정보가 없습니다.</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const loggedInUser = ref(null);
const reservations = ref([]);
onMounted(() => {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("로그인 후 확인 가능합니다~");
    router.push("/login");
  } else {
    loggedInUser.value = user;
  }
  const saved = localStorage.getItem("reservations");
  reservations.value = saved ? JSON.parse(saved) : [];
});
// 로그인 회원 예약만 필터
const myReservations = computed(() => {
  return reservations.value.filter((r) => r.name === loggedInUser.value);
});
// 예약 날짜가 지났는지 확인
const isPast = (dateStr) => {
  // console.log(dateStr);
  const today = new Date().toISOString().split("T")[0];
  // console.log(today);
  return dateStr < today;
};
const cancelReservation = (id) => {
  // console.log(id);
  reservations.value = reservations.value.filter((item) => item.id !== id);
  localStorage.setItem("reservations", JSON.stringify(reservations.value));
  alert("예약이 취소되었습니다.");
};
</script>

<style lang="scss" scoped></style>
