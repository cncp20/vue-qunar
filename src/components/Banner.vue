<template>
    <div class="banner">
        <img class="banner-img" :src="bannerImg" @click="handleShow"/>
        <div class="banner-info">
            <div class="banner-title">
                {{sightName}}
            </div>
            <div class="banner-number">
                {{gallaryImgs.length }}
            </div>
        </div>
        <fade>
        <gallary v-show="showGallary" @close="handleClose" :imgs="gallaryImgs"/>
        </fade>
    </div>
</template>

<script>
import Gallary from "./Gallary";
import Fade from "./Fade";
export default {
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    Gallary,
    Fade
  },
  methods: {
    handleShow() {
      this.showGallary = true;
    },
    handleClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;

    .banner-img {
        width: 100%;
    }

    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        line-height: 0.6rem;
        color: #ffffff;

        .banner-title {
            flex: 1;
            padding: 0 0.2rem;
        }

        .banner-number {
            margin-top: 0.14rem;
            padding: 0 0.4rem;
            height: 0.32rem;
            line-height: 0.32rem;
            font-size: 0.24rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
        }
    }
}
</style>
