import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search";
import Details from "@/views/Details";
import EpisodeDetails from "@/views/EpisodeDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/show/:id",
    name: "ShowDetails",
    component: Details,
  },
  {
    path: "/episode/:id",
    name: "EpisodeDetails",
    component: EpisodeDetails,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
