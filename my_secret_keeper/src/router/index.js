import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Templates from "../views/Templates.vue";

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
    path:"/categories",
    name:"Categories",
    component:Categories,
  },
  {
    path:"/templates",
    name:"Template",
    component:Templates,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
