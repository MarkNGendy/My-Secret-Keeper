import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import Bin from "../views/Bin.vue";
import Archive from "../views/Archive.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,

  },
  {
    path:"/home",
    name:"Home",
    component:Home,
  },
  {
    path:"/bin",
    name:"Bin",
    component:Bin,
  },
  {
    path:"/archive",
    name:"Archive",
    component:Archive,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
