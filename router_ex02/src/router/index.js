import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import About from "@/views/About.vue";
import Products from "@/views/Products.vue";
import Sinup from "@/views/Sinup.vue";
import Login from "@/views/Login.vue";
import Details from "@/views/Details.vue";
// 페이지 주소 연결
const routes = [
    
    { path: "/", component: HomeVue },
    {path: "/about" , component: About },
    {path: "/products" , component: Products},
    {path: "/products/:name/:price" , component: Details},
    {path: "/login" , component: Login },
    {path: "/sinup" , component: Sinup },

]
const router = createRouter({
  history: createWebHistory(),
  routes //경로 정의
});

export default router