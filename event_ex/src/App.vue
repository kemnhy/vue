<template>
  <div class="container">
    <Event />
    <Form_ex />
  </div>
  <div class="container">
    <h2>Array</h2>
  </div>
</template>
<script setup>
import Event from "./components/Event.vue";
import Form_ex from "./components/Form_ex.vue";
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
.container div {
  flex: 1;
  background-color: antiquewhite;
}
</style>
