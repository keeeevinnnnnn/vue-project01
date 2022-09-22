<template>
  <div class="row">
    <div class="col">
      <i class="fa-regular fa-images"></i>
      <p>圖庫</p>
    </div>

    <div class="col">
      <i class="fa-solid fa-file-video"></i>
      <p>影片</p>
    </div>

    <div class="col">
      <i class="fa-regular fa-images"></i>
      <p>相簿</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
};
</script>

<style scoped>
.row {
  width: 100%;
  padding-top: 20px;
  display: flex;
}
.col {
  width: 33.33%;
}
</style>
