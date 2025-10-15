<template>
    <p>이름: {{ props.name }}</p>
    <p>나이: {{ props.age }}</p>
    <button @click="emit('clicked' , '안녕하세요!')">클릭</button>
    <button @click="emit('cancel' ,'진짜 취소 하시겠습니다.')">취소</button>
    <button @click="emit('submit' ,'제출 하시겠습니까?')">제출</button>
</template>
<script setup>
const props = defineProps({
name:String,
age:Number,
});
const emit = defineEmits(["clicked" , "cancel" , "submit" ]);
</script>
<style scoped>

</style>