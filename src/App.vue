<template>
  <div id="app">
    <Header
      :addImage="addImage"
      :parentImage="parentImage"
      :deleteImage="deleteImage"
    />
    <Main
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
import Main from "./components/Main.vue";
import Date from "./components/Date.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      parentImage: [],
    };
  },
  components: {
    Header,
    Main,
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
