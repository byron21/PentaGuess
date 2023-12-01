// import firebase from 'firebase';
import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import PlayView from "../views/PlayView.vue";
import LiveDraw from "../views/LiveDraw.vue";
import BetHistory from "../components/BetHistory.vue";
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
  {
    path: "/history",
    name: "bet",
    component: BetHistory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from,next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if(requiresAuth && !currentUser) next ('home');
//   else if (!requiresAuth && currentUser) next ('play');
//   else next();
// });

export default router;
