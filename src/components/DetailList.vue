<template>
    <div>
        <div v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
}
.item-children {
    padding: 0 0.2rem;
}
</style>
