import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import AreaCliente from "../views/AreaCliente.vue";
import Emails from "../views/Emails.vue";

const routes = [
  {
    path: "/",
    name: "AreaCliente",
    component: AreaCliente,
  },
  {
    path: "/emails",
    name: "Seus emails",
    component: Emails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
