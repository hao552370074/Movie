const cart = {
  namespaced: true,
  state: {
    b: 1,
  },
  mutations: {
    bfget(state, a) {
      console.log(a);
    },
  },
  getters: {
    aa(state, a, b, getters) {
      console.log(state, a, b, getters, "getters");
      getters["order/orders"];
    },
  },
  actions: {
    bf(a, b) {
      console.log(a, b, "6666666");
      a.dispatch("order/bf2", 99999, { root: true });
    },
  },
};
export default cart;
