const cart = {
  namespaced: true,
  state: {
    b: 1,
  },
  mutations: {
    bfget(state, a) {
      // console.log(state,a);
      console.log(a);
	  
    },
  },
  getters: {
    aa(state, a,b,getters,) {
	  console.log(state,a,b,getters, "getters");
	  getters['order/orders']
    },
  },
  actions: {
    bf() {},
  },
};
export default cart;
