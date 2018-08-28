<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link tag='li' 
                class="item border-bottom" 
                v-for="(item, index) in list" 
                :key="index"
                :to='"/detail/" + item.id'
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "recommend",
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.title
    background: #eee
    text-indent: 0.2rem
    line-height: 0.8rem
    margin-top: 0.2rem
.item
    display: flex
    height : 1.9rem
    overflow: hidden
    .item-img
        width : 1.7rem
        height : 1.7rem
        padding: 0.1rem
    .item-info
        flex: 1
        padding: 0.1rem
        .item-title
            line-height : 0.54rem
            font-size : 0.32rem
        .item-desc
            line-height : 0.4rem
            color: #ccc
</style>
