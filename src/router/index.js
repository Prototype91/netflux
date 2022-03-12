import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search";
import ShowDetails from "../views/ShowDetails";
import EpisodeDetails from "../views/EpisodeDetails";

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
    component: ShowDetails,
  },
  {
    path: "/episode/:id",
    name: "EpisodeDetails",
    component: EpisodeDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
