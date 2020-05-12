<template>
  <div class="logn-man">
    <div class="logo">
      <!-- <img src="../../assets/imgs/logn/视界.png" alt /> -->
    </div>
    <div id="logo"></div>
    <!-- <div class="content"></div> -->
    <ss></ss>
  </div>
</template>

<script>
import ss from "./components/admin";
export default {
  name: "logn",
  components: {
    ss
  },
  data() {
    return {};
  },

  methods: {},
   created() {
     let aa=this.$store.getters
     this.$store.getters['cart/aa']
     this.$store.dispatch('cart/bf',999)
    // console.log(this.$store.commit('cart/bfget','哈哈'),'1');
  }
};
</script>

<style lang='scss' scoped>
#logo {
  position: fixed;
  background-image: url("../../assets/imgs/logn/3flot6tu拷贝.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.logo {
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -35px;
  top: 109px;
  width: 70px;
  height: 70px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("../../assets/imgs/logn/视界.png");
}
.content {
  position: absolute;
  top: 217px;
  left: 50%;
  margin-left: -150px;
  width: 8rem;
  height: 11rem;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
