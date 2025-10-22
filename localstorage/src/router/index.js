import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Confirm from "@/views/Confirm.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Reserve from "@/views/Reserve.vue";
const routes = [
    {path: "/" , component : Home},
    {path: "/comfirm" , component : Confirm},
    {path: "/login" , component : Login},
    {path: "/signup" , component : Signup},
    {path: "/reserve" , component : Reserve},

];
export default createRouter({
  history: createWebHistory(),
  routes,
});
