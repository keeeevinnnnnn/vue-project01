<template>
  <div id="app">
    <Header
      :addImage="addImage"
      :parentImage="parentImage"
      :deleteImage="deleteImage"
    />
    <List
      :parentImage="parentImage"
      :selectImage="selectImage"
      :checkAllImage="checkAllImage"
    />
    <Date />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";
import Date from "./components/Date.vue";
import axios from "axios";

// 資料傳遞是有方向性的，在這個規則底下子層並不能主動跟父層拿取新的資料（props的變更只能由父層決定），而父層也不能主動跟子層拿取資料、或者呼叫子層的函式（父層只能監聽子層事件的觸發）。

export default {
  name: "App",
  data() {
    return {
      parentImage: [],
    };
  },
  components: {
    Header,
    List,
    Footer,
    Date,
  },
  mounted() {
    axios
      .get(
        `http://localhost:8081/images/?fromName=${this.parentImage}&amount=50`
      )
      .then((res) => {
        res.data.forEach((e) => {
          const imageObj = { id: e, state: false };
          this.parentImage.push(imageObj);
        });
      });
  },
  methods: {
    addImage(v) {
      this.parentImage.push(v);
    },
    deleteImage(i) {
      this.parentImage.splice(i, 1);
    },
    selectImage(v) {
      v.state = !v.state;
    },
    // 選取後未進行操作，再次點擊關閉所有選取狀態
    checkAllImage() {
      this.parentImage.forEach((v) => {
        v.state = false;
      });
    },
  },
};
</script>

<style>
#app {
  margin-top: 20px;
  text-align: center;
}
</style>
