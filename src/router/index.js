import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Create from "../views/Create.vue";
import CreateRates from "../views/Create_Rates.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";

Vue.use(VueRouter)
Vue.component("menu-icon", MenuIcon);

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/create-rates",
      name: "Create Rates",
      component: CreateRates,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ];

const router = new VueRouter({
  routes
})

export default router
