import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueSpinner = createApp(App).use(router);

vueSpinner.mount("#app");
