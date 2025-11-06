<template>
  <div>
    <button
      @click="toggleTheme"
      class="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
      <span class="text-xl">{{ isDark ? "🌙" : "☀️" }}</span>
    </button>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const isDarkMode = ref(false)
// 다크모드 상태 동기화 함수
const updateDarkMod = ()=>{
    isDarkMode.value = document.documentElement.classList.contains("dark")
};
// 페이지 로드시 초기 다크모드 설정
// const enableDarkMode = ()=>{
//     updateDarkMod();
//     enableDarkMode();
// };
// 버튼 클릭시 다크모드 토글
const toggleTheme = ()=>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.theme = "light";
    }else{
         document.documentElement.classList.add("dark");
        localStorage.theme = "light";
    }
    updateDarkMod()
};
onMounted(()=>{
    updateDarkMod()
})
</script>
