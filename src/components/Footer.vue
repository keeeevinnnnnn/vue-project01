<template>
  <div class="row">
    <div class="col">
      <i class="fa-regular fa-images"></i>
      <p>
        <router-link to="/Gallery" class="routerCss">圖庫</router-link>
      </p>
    </div>

    <div class="col">
      <i class="fa-solid fa-file-video"></i>
      <p>
        <router-link to="/Video" class="routerCss">影片</router-link>
      </p>
    </div>

    <div class="col">
      <i class="fa-regular fa-images"></i>
      <p>
        <router-link to="/Album" class="routerCss">相簿</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
  display: flex;
  align-items: center;
}
.col {
  height: 100%;
  padding-top: 25px;
  width: 33.33%;
  i {
    font-size: 22px;
  }
}
.routerCss {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 600;
}
</style>
