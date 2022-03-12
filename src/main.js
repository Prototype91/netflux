import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).use(store).use(router).mount("#app");
