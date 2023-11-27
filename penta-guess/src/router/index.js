import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayView from "../views/PlayView.vue";
import LiveDraw from "../views/LiveDraw.vue";
import RegisterComponent from "../components/RegisterComponent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent,
  },
  {
    path: "/play",
    name: "play",
    component: PlayView,
  },
  {
    path: "/live",
    name: "live",
    component: LiveDraw,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
