import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import Review from "@/views/Review.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import NotFound from "@/views/NotFound.vue";
import FAQ from "@/views/FAQ.vue";


const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/reser", component: Reser, name: "Reser" },
  { path: "/review", component: Review, name: "Review" },
  { path: "/FAQ", component: FAQ, name: "FAQ" },
  {path: "/ask", component: Review, name: "Ask"},
  {path: "/product-detail/:id", component: ProductDetail, name: "ProductDetail"},
  // 404 page 연결
  {path: "/:pathMatch(.*)*" , component: NotFound, name: " NotFound"},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
