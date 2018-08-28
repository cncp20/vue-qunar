<template>
    <div>
        <div class="header-abs" v-show="absShow">
            <router-link to="/">
                <div class="iconfont back">&#xe624;</div>
            </router-link>
        </div>
        <div class="header" v-show="!absShow" :style="opacity">
            <router-link to="/" class="header-left" tag="div">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
            <div>
                {{title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      absShow: true,
      opacity: {
          opacity: 1
      }
    };
  },
  props: {
      title: String
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
        let top = document.documentElement.scrollTop;
        console.log(top);
        if (top > 60) {
            let opa = top / 140;
            opa = opa > 1 ? 1 : opa;
            this.opacity = {
                opacity: opa
            };
            this.absShow = false;
        } else {
            this.absShow = true;
        }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
    top: 0.2rem;
    left: 0.2rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 3rem;
    background: rgba(0, 0, 0, 0.8);

    .back {
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
    }
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    line-height: 0.86rem;
    height: 0.86rem;
    background: $bgColor;
    color: #fff;
    z-index: 1000;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            text-align: center;
        }
    }
}
</style>
