<template>
  <transition name="fade">
    <div class="img-view" @click="closeBigImg">
      <img :src="imgSrc" />
    </div>
  </transition>
</template>
<script>
export default {
  name: "BigImg",
  props: ["imgSrc"],
  methods: {
    closeBigImg() {
      this.$emit("clickBigImg");
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
  transform: translate3D(0, 0, 0);
}
.fade-enter,
.fade-leave-active {
  transform: translate3D(100%, 0, 0);
}

/* bigimg */
.img-view {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: azure;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-view img {
  /* width: 800px; */
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10000;
}
</style>
