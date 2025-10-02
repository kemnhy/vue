import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import AboutVue from "@/views/About.vue";
import ReserVue from "@/views/Reser.vue";
const routes = [
  {
    path: "/",
    component: HomeVue,
  },
  {
    path: "/about",
    component: AboutVue,
  },
  {
    path: "/reser",
    component: ReserVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
