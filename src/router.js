import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/games",
      name: "Games",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Games.vue")
    },
    {
      path: "/teamsinfo",
      name: "Teamsinfo",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Teamsinfo.vue")
    },
    {
      path: "/chat",
      name: "Chat",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Chat.vue")
    },
    {
      path: "/countries",
      name: "Countries",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Countries.vue")
    }
  ]
});
