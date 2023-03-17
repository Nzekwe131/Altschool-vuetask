import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      repos: [],
    };
  },
  getters: {
    getAllRepos(state) {
      return state.repos;
    },
  },
  mutations: {
    fetchRepos(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    fetchRepos(context, payload) {
      context.commit("fetchRepos", payload);
    },
  },
  modules: {},
});
