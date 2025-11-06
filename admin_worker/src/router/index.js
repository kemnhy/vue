import AdminHome from "@/pages/admin/AdminHome.vue";
import Commiuniction from "@/pages/admin/Commiuniction.vue";
import Customers from "@/pages/admin/Customers.vue";
import DashBord from "@/pages/admin/DashBord.vue";

import Inquries from "@/pages/admin/Inquries.vue";
import Login_Admin from "@/pages/admin/Login_Admin.vue";
import Reservations from "@/pages/admin/Reservations.vue";
import Settings from "@/pages/admin/Settings.vue";
import WorkerAdmin from "@/pages/admin/WorkerAdmin.vue";
import Calender from "@/pages/worker/Calender.vue";
import Dashbord from "@/pages/worker/Dashbord.vue";
import Jobs from "@/pages/worker/Jobs.vue";
import LoginWorker from "@/pages/worker/LoginWorker.vue";
import Payment from "@/pages/worker/Payment.vue";
import HomeVue from "@/views/Home.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },
  // 관리자 페이지 관련
  { path: "/admin", component: Login_Admin, name: "LoginAdmin" },
  {
    path: "/admin",
    component: AdminHome,
    redirect: "admin/dashbord",
    children: [
      { path: "dashbord", component: DashBord, name: "DashBord" },
      { path: "reservations", component: Reservations, name: "Reservations" },
      { path: "workers", component: WorkerAdmin, name: "WorkerAdmin" },
      { path: "customers", component: Customers, name: "Customers" },
      { path: "inquiries", component: Inquries, name: "Inquries" },
      { path: "settings", component: Settings, name: "Settings" },
      { path: "customer-communication", component: Commiuniction, name: " Commiuniction" },
    ],
  },

  // 기사 페이지 관련
  { path: "/worker", component: LoginWorker, name: "LoginWorker" },
  {
    path: "/worker/dashbord",
    component: Dashbord,
    redirect: "/worker/dashbord/jobs",
    children: [
      { path: "jobs", component: Jobs, name: "MobileJobs" },
      { path: "payment", component: Payment, name: "MobilePayment" },
      { path: "calender", component: Calender, name: "MobileCalender" },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
