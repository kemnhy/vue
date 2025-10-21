<template>
  <Local />
  <hr />
  <hr />
  <hr />
  <div class="cotainer">
    <Review_01 />
    <hr />
    <Login />
  </div>
</template>
<script setup>
import Local from "./Local.vue";
import Login from "./Login.vue";
import Review_01 from "./Review_01.vue";
</script>

<style lang="scss" scoped>
.cotainer{
    display: flex;
}
</style>
