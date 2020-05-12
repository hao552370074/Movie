<template>
  <div class="admin-vue">
    <span>新视界</span>
    <div class="content">
      <div @click="account" :class="['letf','float',[showUnderline?'underline':'']]">账户密码登录</div>
      <div @click="cellphone" :class="['right','float',[!showUnderline?'underline':'']]">手机动态登录</div>
    </div>
    <div class="Input">
      <img src="../../../assets/imgs/logn/椭圆981.png" alt />
      <input type="text" v-model="aa" placeholder="请输入账号" />
    </div>
    <div class="Input2">
      <img src="../../../assets/imgs/logn/圆角矩形27.png" alt />
      <input type="password" v-model="bb" placeholder="请输入密码" />
    </div>
    <div class="button">
      <!-- <router-link tag="button" :to="{name:'main'}" class="cart">
              登录
      </router-link>-->
      <button @click="lognS">登录</button>
    </div>
    <div class="text1">忘记密码？</div>
    <div class="text2">注册新用户</div>
    <div class="text3">第三方登录</div>
    <div class="icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin.vue",

  data() {
    return {
      showUnderline: false,
      aa: null,
      bb: null
    };
  },
  methods: {
    account() {
      this.showUnderline = true;
    },
    cellphone() {
      this.showUnderline = false;
    },
    lognS() {
      if (this.aa == 1 && this.bb == 2) {
        console.log("密码账号正确，正在跳转");
        // alert("哈哈");
        this.$router.push({
          path: "hoem",
          name: "home",
          params: {
            key: "key",
            msgKey: "哈哈"
          }
          /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
        });
      }
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
.icon {
  position: absolute;
  top: 85%;
  left: 50%;
  margin-left: -75px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  span {
    float: left;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
  span:nth-child(1) {
    background-image: url("../../../assets/imgs/logn/qq.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  span:nth-child(2) {
    background-image: url("../../../assets/imgs/logn/微信.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0px 35px;
  }
  span:nth-child(3) {
    background-image: url("../../../assets/imgs/logn/微博.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.text1 {
  // overflow: hidden;
  font-size: 12px;
  color: #797979;
  position: relative;
  top: 46%;
}
.text2 {
  height: 10px;
  font-size: 13px;
  color: #fa5a4a;
  position: relative;
  top: 50%;
}
.text3 {
  font-family: PingFangSC-Regular;
  font-size: 8px;
  color: #797979;
  position: relative;
  top: 53%;
  &::before {
    content: "";
    height: 1px;
    width: 60px;
    background-color: #d2d2d2;
    position: absolute;
    top: 50%;
    right: 18%;
  }
  &::after {
    content: "";
    height: 1px;
    width: 60px;
    background-color: #d2d2d2;
    position: absolute;
    top: 50%;
    left: 18%;
  }
}
.button {
  z-index: 99;
  position: absolute;
  top: 58%;
  left: 50%;
  margin-left: -127px;
  button {
    font-size: 16px;
    color: #ffffff;
    border: 0px;
    width: 254px;
    height: 34px;
    background: linear-gradient(
      0deg,
      rgba(254, 64, 61, 1) 0%,
      rgba(246, 119, 89, 1) 100%
    );
    border-radius: 17px;
  }
}
.admin-vue {
  position: absolute;
  top: 217px;
  left: 50%;
  margin-left: -165px;
  width: 88%;
  height: 65%;
  background-color: #ffffff;
  border-radius: 10px;
}
span {
  position: relative;
  top: 20px;
  font-weight: 700;
  font-size: 18px;
  color: #797979;
  // background: linear-gradient()
}
.float {
  color: #797979;
  font-size: 12px;
  line-height: 30px;
  width: 50%;
  height: 30px;
  margin: 40px auto 20px;
  // display: flex;
  float: left;
  // justify-content: space-evenly;
  // align-content: center;
}
.underline {
  &::before {
    content: "";
    position: absolute;
    top: 21%;
    margin-left: 26px;
    width: 20px;
    height: 2px;
    background-color: #fe433f;
    border-radius: 10px;
    border: 1px solid #fe433f;
  }
}
.Input {
  position: absolute;
  margin: 0 auto;
  top: 28%;
  left: 50%;
  margin-left: -127.5px;
  width: 255px;
  height: 41px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgb(226, 226, 226);
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  input {
    color: rgb(105, 105, 105);
    // text-align: center;
    // margin: 0 auto;
    outline: none;
    width: 70%;
    height: 94%;
    // line-height: 41px;
    border: 0;
  }
  img {
    display: block;
    width: 10%;
    height: 65%;
  }
}
.Input2 {
  position: absolute;
  margin: 0 auto;
  top: 42%;
  left: 50%;
  margin-left: -127.5px;
  width: 255px;
  height: 41px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgb(226, 226, 226);
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  input {
    color: rgb(105, 105, 105);
    // text-align: center;
    // margin: 0 auto;
    outline: none;
    width: 70%;
    height: 94%;
    // line-height: 41px;
    border: 0;
  }
  img {
    display: block;
    width: 10%;
    height: 65%;
  }
}
</style>
