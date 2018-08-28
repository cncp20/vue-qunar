<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div>
                <div class="title border-topbottom">当前城市</div>
                <div class="list">
                    <div class="button-wraper">
                        <div class="button">
                            {{this.$store.state.city}}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="title border-topbottom">热门城市</div>
                <div class="list">
                    <div class="button-wraper" v-for="item in hot" :key="item.id" @click="handleClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div v-for="(city, key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="list" v-for="item in city" :key="item.id" @click="handleClick(item.name)">
                    <div class="list-item border-bottom">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "List",
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper ,{click: true});
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleClick(city) {
        this.$router.push("/");
        this.$store.commit("changeCity", city);
    }
  },
  watch: {
    letter() {
      let ele = this.$refs[this.letter][0];
      this.scroll.scrollToElement(ele);
    }
  }
};
</script>

<style lang="stylus" scoped>
.city-list {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0.86rem;
    overflow: hidden;
}

.title {
    padding: 0.15rem 0.2rem;
    background: #eee;
}

.list {
    padding: 0.1rem 0.3rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wraper {
        width: 33.33%;
        float: left;
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;

        .button {
            border: 1px #ddd solid;
            padding: 0.2rem 0;
            text-align: center;
            border-radius: 5px;
        }
    }

    .list-item {
        padding: 0.3rem 0.15rem;
    }
}
</style>
