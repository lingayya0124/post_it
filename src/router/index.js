import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Comments from "../views/Comments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/comments/:id",
    name: "comments",
    component: Comments,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
