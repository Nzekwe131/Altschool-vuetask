import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Add your other paths heres

  {
    path: '/Contactpage',
    name:'AboutPage',
    component: () => import("../views/Repos/ContactPage"),
  },

  {
    path: '/',
    name:'HomePage',
    component: () => import("../views/Repos/HomePage"),
  },

  {
    path: "/repos",
    component: () => import("../views/Repos/ReposHome"),
  },
  {
    path: "/search",
    component: () => import("../views/Repos/SearchRepo"),
  },

  {
    path: "/repos/:name",
    component: () => import("../views/Repos/RepoFullDetails"),
  },

  {
    path: "/:catchALL(.*)",
    component: () => import("../views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
