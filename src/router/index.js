import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: "/index",
    name: "index",
    component: () => import( "../views/index/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
