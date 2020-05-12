const order = {
  namespaced: true,
  state: {
    a: 1,
  },
  mutations: {},
  actions: {
    bf2(a,b) {
      console.log(444);
    },
  },
  getters: {
    orders(a,b) {
      console.log(222);
    },
  },
};
export default order;
