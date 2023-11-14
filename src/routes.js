import { createWebHistory, createRouter } from "vue-router";
import PageTwo from "./RoutePages/PageTwo.vue";
import PageOne from "./RoutePages/Page.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  //   {
  //     name: "Page",
  //     path: "/page",
  //     component: PageOne,
  //   },
  {
    name: "Page",
    path: "/page/:name",
    component: PageOne,
  },
  {
    name: "PageTwo",
    path: "/pagetwo",
    component: PageTwo,
  },
  //   for dynamic routes
  // {
  //     name: "PageTwo",
  //     path: "/pagetwo?:name",
  //     component: PageTwo,
  //   },

  //   for page not found
  // {
  //     name:'PageNotFound',
  //     path:'/:pathMatch(.*)*',
  //     component:componentName
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
