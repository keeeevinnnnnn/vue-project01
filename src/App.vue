<template>
  <div id="app">
    <MyHeader :image="image" />
    <MyMain :image="image" />
    <MyDate />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyMain from "./components/MyMain.vue";
import MyDate from "./components/MyDate.vue";

export default {
  name: "App",
  data() {
    return {
      image: [],
    };
  },
  components: {
    MyHeader,
    MyMain,
    MyFooter,
    MyDate,
  },
};
</script>

<style>
#app {
  margin-top: 20px;
  text-align: center;
}
</style>
