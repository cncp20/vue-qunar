<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
            城市选择
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
      city: String
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header {
    line-height: 0.86rem;
    background: $bgColor;
    color: #fff;
    text-align: center;
    position: relative;
    .header-left {
        position: absolute;
        width: 0;
        padding : 0  0.3rem;
        height: 100%;
        .back-icon {
            text-align: center;
        }
    }
}
</style>
