<template>
  <div class="item">
    <div class="loadImage" v-for="(item, index) in parentImage" :key="index">
      <!-- v-viewer="{ toolbar: false, title: false }" -->
      <img
        :src="`http://127.0.0.1:8080/image/${item.id}`"
        @click="handelImage(item, $event)"
      />
      <BigImg v-if="showImg" @clickBigImg="closeBigImg" :imgSrc="imgSrc" />
      <div v-show="item.state" class="selectState">✅</div>
    </div>
  </div>
</template>

<script>
import BigImg from "./BigImg.vue";

export default {
  name: "List",
  props: ["parentImage", "selectImage", "checkAllImage"],
  components: {
    BigImg,
  },
  mounted() {
    this.$bus.$on("selectText", (res) => {
      this.fromMainSelectText = res;
      // 選取後沒進行刪除，再次點擊切換選取狀態後，把已選取的照片都取消。
      if (this.fromMainSelectText === true) {
        this.checkAllImage();
      }
    });
  },
  data() {
    return {
      fromMainSelectText: Boolean,
      showImg: false,
      imgSrc: "",
    };
  },
  methods: {
    handelImage(item, e) {
      // 如果有打開選取才進行選取操作
      if (this.fromMainSelectText == false) {
        this.selectImage(item);
      }
      if (e.currentTarget.src) {
        this.imgSrc = e.currentTarget.src;
        this.showImg = true;
      }
    },
    closeBigImg() {
      this.imgSrc = "";
      this.showImg = false;
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
