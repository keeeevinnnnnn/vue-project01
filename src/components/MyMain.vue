<template>
  <div class="item">
    <div class="loadImage" v-for="(item, index) in image" :key="index">
      <img
        :src="`http://127.0.0.1:8080/image/${item.id}`"
        @click="selectImage(item)"
      />
      <div v-show="item.state" class="selectState">✅</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMain",
  props: ["image"],
  mounted() {
    this.$bus.$on("selectText", (res) => {
      this.FromMainSelectText = res;
    });
  },
  data() {
    return {
      FromMainSelectText: Boolean,
    };
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    selectImage(item) {
      // 如果有打開選取才能進行操作
      if (this.FromMainSelectText == false) {
        item.state = !item.state;
      }
    },
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  height: 640px;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}
.loadImage {
  width: 33%;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.loadImage img {
  width: 80%;
  height: 80%;
}
.selectState {
  width: 20px;
  height: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
