
<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="aa">
    <div class="nav-top-bj">
      <span>
        <div class="nav-search">
          <div class="search">
            <img src="../../assets/imgs/app-home-image/放大镜.png" alt />
            <input type="text" placeholder="搜索电影" />
          </div>
          <div class="nav-icon nav-icon-1"></div>
          <div class="nav-icon nav-icon-2"></div>
        </div>
        <!-- <homenav></homenav> -->
        <div class="nav-text">
          <span
            :class="[[textColor==index?'kk':'']]"
            v-for="(i,index) in nav"
            :key="i.index"
            @click="text(index)"
          >{{i.name}}</span>
        </div>
        <div class="nav-text-icon"></div>
      </span>
    </div>

    <swiper
      class="banner-swiper"
      :options="swiperOption"
      ref="mySwiper"
      @someSwiperEvent="callback"
      v-if="todos.length"
    >
      <!-- slides -->
      <swiper-slide class="swiper-slide" v-for="k in todos" :key="k.id">
        <img class="banner-img" :src="k.img" alt />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
    <!-- <button @click="aa">哈哈</button> -->
    <div class="bb">
      <div class="cc"></div>
    </div>
    <button @click="ceshi">测试</button>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import homenav from "@/views/home/components/nav";

import homeBanner from "../../api/home-banner/homeApi";

export default {
  components: {
    swiper,
    swiperSlide,
    homenav
  },
  name: "Home",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        loop: true,
        slidesPerView: 1.36,
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }, //这样写小圆点就有了
        navigation: {
          //左右按钮
          // nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev"
        }
      },
      nav: [
        {
          name: "推荐"
        },
        {
          name: "电影"
        },
        {
          name: "电视剧"
        },
        {
          name: "综艺"
        },
        {
          name: "动漫"
        }
      ],
      textColor: "",
      todos: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    aa() {
      console.log("哈哈");
    },
    callback() {},
    text(index) {
      console.log(index);
      this.textColor = index;
    },
    ceshi() {
      console.log(this.todos);
    }
  },
  created() {
    homeBanner.homeImg().then(res => {
      this.todos = res;
    });
  },
  watch: {
    //事件监听  newVal新值   oldVal旧值   可用于计算改变事件等
    text1: function(newVal, oldVal) {
      console.log("新值==>" + newVal, "旧值==>" + oldVal);
      this.text3 = newVal * this.text2;
    }
  }
};
</script>


<style lang="stylus" >
.banner-swiper {
  position: relative;
  top: -110px;
  text-align: center;

  .swiper-slide:not(.swiper-slide-active) {
    transform: scale(0.94);
    align-items: center;
  }

  .banner-img {
    width: 100%;
    height: 66%;
    border-radius: 8px;
  }
}

.nav-text-icon {
  position: absolute;
  right: 10px;
  top: 34%;
  width: 24px;
  height: 24px;
  background: url('../../assets/imgs/app-home-image/更多.png') no-repeat;
  background-size: 100%;
}

.nav-text {
  position: absolute;
  top: 36%;
  font-size: 17px;
  color: #ffffff;
  left: 1%;

  span {
    margin: 0 14px;
  }
}

.kk {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    left: 50%;
    margin-left: -30%;
    border-radius: 10px;
    background-color: #ffffff;
    bottom: -10px;
  }
}

.nav-top-bj {
  width: 100%;
  height: 6.466667rem;
  background: linear-gradient(90deg, rgba(255, 70, 65, 1) 0%, rgba(247, 113, 86, 1) 100%);
  position: relative;

  span {
    width: 100%;
    height: 100%;

    .nav-search {
      width: 100%;
      height: 100%;
      background: url('../../assets/imgs/app-home-image/home-bj.png') no-repeat;
      background-size: 100%;
      position: relative;
      display: flex;
      justify-content: last baseline;

      &::before {
        content: '';
        width: 100%;
        height: 100px;
        background-color: #ffffff;
        position: absolute;
        border-radius: 50%;
        bottom: -1.4rem;
        left: 0;
      }
    }

    .search {
      width: 80%;
      margin: 40px 0 0 10px;
      height: 26px;
      background-color: #ffffff;
      border-radius: 20px;
      display: flex;
      justify-content: space-around;

      img {
        margin-top: 3px;
        width: 20px;
        height: 20px;
      }

      input {
        text-align: 2px;
        letter-spacing: 3px;
        text-align: center;
        outline: none;
        border-radius: 20px;
        line-height: 26px;
        width: 83%;
        border: none;
      }
    }

    .nav-icon {
      margin: 40px 6px 0 10px;
      width: 26px;
      height: 26px;
      background: url('../../assets/imgs/app-home-image/圆角.png') 0 0 no-repeat;
      background-size: 80%;
    }

    .nav-icon-1 {
      background: url('../../assets/imgs/app-home-image/形状989.png') no-repeat;
      background-size: 100%;
      margin: 40px 0 0 10px;
    }
  }
}

.swiper-slide {
  overflow: hidden;
  height: 300px;
}

.swiper-pagination {
  position: absolute;
  top: 5.5rem;
  z-index: 999;
}

.my-bullet {
  border-radius: 2rem;
  width: 0.3rem;
  height: 0.08rem;
  margin: 0 0.06rem;
  display: inline-block;
  background: rgba(253, 69, 66, 0.196);
  outline: none;
}

.my-bullet-active {
  border-radius: 2rem;
  background: #FD4642;
  width: 0.5rem;
  outline: none;
}

.swiper-button-prev {
  background: none;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>