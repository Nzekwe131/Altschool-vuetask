// Import the necessary dependencies
import { createStore } from "vuex";

// Create the Vuex store
const store = createStore({
  // Define the store's state
  state: {
    repos: []
  },
  // Define the store's getters
  getters: {
    getAllRepos: state => state.repos
  },
  // Define the store's mutations
  mutations: {
    setRepos: (state, payload) => state.repos = payload
  },
  // Define the store's actions
  actions: {
    fetchRepos: ({ commit }, payload) => {
      // Make an API call to fetch the repos
      // ...
      // Once the data is fetched, commit the mutation to update the state
      commit("setRepos", payload);
    }
  }
});

// Export the store so it can be used in other parts of the app
export default store;