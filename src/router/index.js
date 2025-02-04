import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/:universe?",
    component: Home,
    props: (route) => ({
      universe: route.params.universe,
      topic: route.params.topic,
    }),
  },
  {
    path: "/:universe/:topic",
    component: Home,
    props: true, // Automatically passes params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
