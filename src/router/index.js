import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SmoothScroll from "../views/SmoothScroll.vue";
import DropdownMenu from "../views/DropdownMenu.vue";
import ConditionalRendering from "../views/ConditionalRendering.vue";
import Modals from "../views/Modals.vue";
import Plugins from "../views/Plugins.vue";
import Dialogs from "../views/Dialogs.vue";
import InlineSvg from "../views/InlineSvg.vue";
import Tabs from "../views/Tabs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/scroll",
    name: "SmoothScroll",
    component: SmoothScroll,
  },
  {
    path: "/dropdown",
    name: "DropdownMenu",
    component: DropdownMenu,
  },
  {
    path: "/rendering",
    name: "ConditionalRendering",
    component: ConditionalRendering,
  },
  {
    path: "/modals",
    name: "Modals",
    component: Modals,
  },
  {
    path: "/plugins",
    name: "Plugins",
    component: Plugins,
  },
  {
    path: "/dialogs",
    name: "Dialogs",
    component: Dialogs,
  },
  {
    path: "/svgs",
    name: "InlineSvg",
    component: InlineSvg,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
