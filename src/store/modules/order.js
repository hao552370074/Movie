const order = {
  namespaced: true,
  state: {
    a: 1,
  },
  mutations: {},
  actions: {},
  getters: {
    orders(a,b) {
      console.log(222);
    },
  },
};
export default order;
