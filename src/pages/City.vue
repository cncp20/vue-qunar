<template>
    <div>
        <city-header />
        <city-list :hot="hot" :cities="cities" :letter="letter"/>
        <city-index :cities="cities" @change="handleLetterClick"/>
    </div>
</template>

<script>
import CityHeader from "../components/CityHeader.vue";
import CityList from "../components/CityList.vue";
import CityIndex from "../components/CityIndex.vue";
import axios from "axios";
export default {
  components: {
    CityHeader,
    CityList,
    CityIndex
  },
  data() {
    return {
      hot: [],
      cities: {},
      letter: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/static/mock/city.json").then(data => {
        let res = data.data;
        console.log(res.data.cities);
        if (res.ret) {
          this.hot = res.data.hotCities;
          this.cities = res.data.cities;
        }
      });
    },
    handleLetterClick(l) {
        this.letter = l;
    }
  }
};
</script>

<style>
</style>
