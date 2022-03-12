import { createStore } from "vuex";

export default createStore({
  state: {
    shows: [],
  },
  mutations: {
    add(state, payload) {
      return (state.shows = payload);
    },
  },
  actions: {
    add(context, payload) {
      context.commit("add", payload);
    },
  },
  modules: {},
});
