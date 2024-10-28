import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import TodosView from "../views/TodosView.vue";

const routes = [
  {
    path: "/",
    name: "TodosView",
    component: TodosView,
    meta: { title: "Create Todo" },
  },
  {
    path: "/about",
    name: "aboutPage",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
