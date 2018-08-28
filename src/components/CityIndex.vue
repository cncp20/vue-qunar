<template>
    <div class="list">
        <div class="item" 
            v-for="item in letters" 
            :key="item" 
            :ref="item"
            @click="handleLetterClick" 
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{item}}</div>
    </div>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      move: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const arr = [];
      for (const key in this.cities) {
        arr.push(key);
      }
      return arr;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.move = true;
    },
    handleTouchMove(e) {
      if (this.move) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let top = e.touches[0].clientY - 43;
          let index = Math.floor((top - this.startY) / 24);
          if (index >= 0 && index <= this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 20);
      }
    },
    handleTouchEnd() {
      this.move = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
    width: 0.4rem;
    position: fixed;
    right: 0;
    height: 100%;
    background: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item {
        text-align: center;
        margin: 0.1rem 0;
    }
}
</style>
