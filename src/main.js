import Vuex from "vuex";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index.js";
import firebase from "firebase/app";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyDhMibwW7KJ9PCAB1V-Ru1HAo8D1mpL0HY",
  authDomain: "my-project-1537688444809.firebaseapp.com",
  databaseURL: "https://my-project-1537688444809.firebaseio.com",
  projectId: "my-project-1537688444809",
  storageBucket: "my-project-1537688444809.appspot.com",
  messagingSenderId: "600809249098"
};
firebase.initializeApp(config);

export default new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
