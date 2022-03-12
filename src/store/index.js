import { createStore } from "vuex";

export default createStore({
  state: {
    comments: [],
  },
  mutations: {
    add(state, payload) {
      state.comments.push(payload);
    },
  },
  getters: {
    getComments: (state) => (id) => {
      return state.comments.filter((c) => c.comment.id == id);
    },
  },
  actions: {
    add(context, payload) {
      context.commit("add", payload);
    },
  },
});
