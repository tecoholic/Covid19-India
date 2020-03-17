import Vue from "vue";
import Vuex from "vuex";
import Papa from "papaparse";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    statewise: []
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_STATEWISE(state, payload) {
      state.statewise = payload;
    }
  },
  actions: {
    loadStateWiseData({ commit }) {
      commit("SET_LOADING", true);
      Papa.parse("data/statewise-cases.csv", {
        header: true,
        download: true,
        complete: result => {
          commit("SET_STATEWISE", result.data);
          commit("SET_LOADING", false);
        }
      });
    }
  },
  modules: {}
});
