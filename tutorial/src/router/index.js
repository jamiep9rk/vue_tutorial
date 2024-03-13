import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/main", name: "Main", component: MainPage },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
