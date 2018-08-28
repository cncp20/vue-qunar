<template>
    <div>
        <home-header/>
        <home-swiper :list="swiperList"/>
        <home-icon :iconList="iconList"/>
        <home-recommend :list="recList"/>
    </div>
</template>

<script>
import {mapState} from "vuex";
import HomeHeader from "./../components/HomeHeader.vue";
import HomeSwiper from "./../components/HomeSwiper.vue";
import HomeIcon from "./../components/HomeIcon.vue";
import HomeRecommend from "./../components/Recommend.vue";
import axios from "axios";
export default {
  data() {
    return {
      swiperList: [],
      iconList: [],
      recList: [],
      lastCity: ''
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getInfo() {
      axios.get("/static/mock/index.json").then(data => {
        let res = data.data;
        if (res.ret) {
          this.swiperList = res.data.swiperList;
          this.iconList = res.data.iconList;
          this.recList = res.data.recommendList;
        }
      });
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getInfo();
    }
  }
};
</script>

<style>
</style>
