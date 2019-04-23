import Vuex from "vuex";
import Vue from "vue";
import data from "./modules/data";

// load Vuex
Vue.use(Vuex);
// create store
export default new Vuex.store({
  modules: {
    data
  }
});
