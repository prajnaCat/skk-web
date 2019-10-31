import Vue from "vue";
import Router from "vue-router";
import TopBar from "./components/TopBar.vue";
import FootBar from "./components/FootBar.vue";
import LeftBar from "./components/LeftBar.vue";
import RightBar from "./components/RightBar.vue";
import SideBar from "./components/SideBar.vue";
import TagBar from "./components/TagBar.vue";
import Login from "./views/Login.vue";
import HOME from "./views/Home.vue";
import Register from "./views/Register.vue";


Vue.use(Router);
Vue.component("top-bar", TopBar);
Vue.component("foot-bar", FootBar);
Vue.component("right-bar", RightBar);
Vue.component("left-bar", LeftBar);
Vue.component("side-bar", SideBar);
Vue.component("tag-bar", TagBar);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HOME
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
