<template>
  <div class="row">
    <div class="header">
      <button class="selectBtn">選取</button>
      <button class="addBtn" @click="uploadAvatar">十</button>
      <input
        type="file"
        accept="image/*"
        name="imgUpload"
        multiple="multiple"
        v-show="false"
        ref="avatar"
        @change="onFile"
      />
    </div>
    <div class="item">
      <div class="loadImage" v-for="(v, i) in image" :key="i">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "MyHeader",
  data() {
    return {
      image: [],
    };
  },
  methods: {
    uploadAvatar() {
      this.$refs.avatar.click();
    },
    onFile(e) {
      let file = e.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.addEventListener("load", () => {
        this.image.push(filereader.result);
      });

      let param = new FormData();
      this.image.forEach((f) => {
        param.append("file", f.raw);
      });

      //   param.append("file", file, file.name);

      //   let config = {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   };

      //   axios
      //     .post("http://127.0.0.1:8080/upload", param, config)
      //     .then((res) => {
      //       //   console.log(res.data);
      //     })
      //     .catch((error) => {
      //       //   console.log(error);
      //     });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.header button {
  background-color: grey;
  color: white;
  font-size: 1rem;
  border: none;
}

.selectBtn {
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
}
.addBtn {
  margin-right: 10px;
  border-radius: 50%;
  padding: 0px 10px;
}
.item {
  width: 100%;
  height: 670px;
  display: flex;
  flex-wrap: wrap;
}
.loadImage {
  width: 33%;
  height: 100px;
}
.loadImage img {
  width: 100%;
}
</style>
