import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import modal from "./plugins/Modal/ModalPlugin";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).use(modal).mount("#app");
