import Vuex from "vuex";
import Vue from "vue";
import Games from "./modules/games";

// load Vuex

Vue.use(Vuex);

export default new Vuex.store({
  modules: {
    games
  }
});
