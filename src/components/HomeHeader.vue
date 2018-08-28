<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>搜索酒店/景点</div>
        <router-link to="/city">
            <div class="header-right">{{city}}<span class="iconfont arrow">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "Header",
  computed: {
      ...mapState({
          city: "city"
      })
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header {
    display: flex;
    line-height: 0.86rem;
    background: $bgColor;
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;
        .back-icon {
            text-align: center;
        }
    }

    .header-input {
        border-radius: 0.1rem;
        margin: 0.12rem 0.2rem;
        background #fff
        flex: 1;
        color: #ccc;
        height: 0.64rem;
        line-height: 0.64rem;
        padding-left : 0.12rem;
    }

    .header-right {
        text-align: center;
        width: 1.24rem;
        float: right;
        .arrow {
            font-size : 0.24rem;
        }
    }
}
</style>
