<template>
<div class="card">
    <h2>예약 확인</h2>
    <p>✅{{ reserVation.name }}님 예약이 완료되었습니다. </p>
    <p>✅서비스 "{{ reserVation.date }}</p>
    <p>✅결제금액 :{{ reserVation.price }}</p>
    <p>✅상태 :{{ reserVation.status }}</p>
    <button class="btn btn --danger" @click="canceLReser">취소하기</button>
</div>
</template>
<script setup>
// import router from '@/router';
import { useRouter } from 'vue-router';

const router = useRouter()
const emit = defineEmits(["reset"])
const props = defineProps ({
     reserVation: { type: Object, required: true },
});
const canceLReser = ()=>{
    const cofirmCancel = confirm("정말 예약을 취소하겠습니까?")
    if(cofirmCancel){
        alert("예약이 취소되었습니다.")
        emit("reset")
        router.push("/reser")
    }else{
        router.push("/")
    }
}
</script>
<style scoped>

</style>