import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "@/store";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

createApp(App).use(store, key).use(router).use(Equal).mount("#app");
