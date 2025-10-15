<template>
  <div>
    <child :name="'노현'" :age="20" :shop="'제빙기 청소샵'" @clicked="sayHi" />
    <MyCard :name="'nohyun'" :age="30" @clicked="showMessage" @cancel="showMessage" @submit="showMessage" />
  </div>
</template>
<script setup>
import Child from "./Child.vue";
import MyCard from "./MyCard.vue";
const sayHi = (message) => {
  alert(message);
};
const showMessage = (message)=>{
  alert(message);

}
</script>
<style scoped></style>
