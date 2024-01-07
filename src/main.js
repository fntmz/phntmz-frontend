import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SocialsDisplay from "./components/Credits/SocialsDisplay.vue";

import "./assets/css/main.css";

const app = createApp(App);
app.component("SocialsDisplay", SocialsDisplay);

app.use(router);

app.mount("#app");

