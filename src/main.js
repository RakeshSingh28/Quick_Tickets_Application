import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import i18n from "./i18n.js";
import "../public/css/style.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
