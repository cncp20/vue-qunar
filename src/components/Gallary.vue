<template>
    <div class="container" @click="handleClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="img" :src="item" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOptions: {
                observer: true,
                observeParents: true
            }
        }
    },
    props: {
        imgs: Array
    },
    methods: {
        handleClick() {
            this.$emit("close");
        }
    }
}
</script>

<style lang="stylus" scoped>
.container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content : center;
    justify-content : center;
    .wrapper {
        height: 0;
        overflow: hidden;
        width: 100%;
        padding-bottom: 100%;
        .img {
            width: 100%;
        }
    }
}

</style>
