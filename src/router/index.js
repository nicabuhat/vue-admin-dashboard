import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import SignIn from "../views/SignInFlow/SignInView";
import Recover from "../views/SignInFlow/RecoverView";
import Request from "../views/SignInFlow/RequestView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
