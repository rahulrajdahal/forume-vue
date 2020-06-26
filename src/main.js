import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBell,
    faSearch,
    faWallet,
    faHome,
    faQuestion,
    faCompass,
    faTv,
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'

library.add(
    faBell,
    faSearch,
    faWallet,
    faHome,
    faQuestion,
    faCompass,
    faTv,
    faArrowUp,
    faArrowDown
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");