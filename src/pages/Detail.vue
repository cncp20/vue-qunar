<template>
    <div>
        <banner 
        :bannerImg='bannerImg'
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"
        />
        <detail-header :title="sightName"/>
        <div class="content">
            <list :list='list'/>
        </div>
    </div>
</template>

<script>
import Banner from "./../components/Banner.vue";
import DetailHeader from "./../components/DetailHeader.vue";
import List from "./../components/DetailList.vue";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      list: [],
      bannerImg: "",
      sightName: "",
      gallaryImgs: []
    };
  },
  components: {
    Banner,
    List,
    DetailHeader
  },
  mounted() {
    axios
      .get("/static/mock/detail.json?id=" + this.$route.params.id)
      .then(res => {
        let data = res.data.data;
        this.list = data.categoryList;
        this.bannerImg = data.bannerImg;
        this.sightName = data.sightName;
        this.gallaryImgs = data.gallaryImgs;
      });
  }
};
</script>

<style scoped>
.content {
  height: 50rem;
}
</style>
