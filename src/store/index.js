import Vuex from "vuex";
import Vue from "vue";
import data from "./modules/data";
import chat from "./modules/chat";
// load Vuex
Vue.use(Vuex);
// create store
export default new Vuex.Store({
  modules: {
    data,
    chat
  }
});
