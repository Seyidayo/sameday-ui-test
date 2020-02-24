import Vue from "vue";
import VueRouter from "vue-router";
import Production from "../views/Production.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Production",
    component: Production,
    meta: {
      title: "Production House | SameDay Custom",
      content: "Production House | SameDay Custom"
    }
  },
  {
    path: "/order",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Order.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
