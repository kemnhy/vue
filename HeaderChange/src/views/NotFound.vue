<template>
  <div class="home">
    <div class="notfound">
      <h1>😢 404</h1>
      <p>이 페이지는 없는 페이지 입니다.~</p>
      <router-link to="/">홈으로 돌아가기</router-link>
    </div>
  </div>
</template>
<style scoped>
.notfound {
  text-align: center;
  margin-top: 100px;
  font-family: "Pretendard", sans-serif;
}

.notfound h1 {
  font-size: 80px;
  color: #ff6b6b;
  margin-bottom: 10px;
}

.notfound p {
  font-size: 20px;
  color: #555;
  margin-bottom: 30px;
}

.notfound a {
  display: inline-block;
  background-color: #092857;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
}
</style>
