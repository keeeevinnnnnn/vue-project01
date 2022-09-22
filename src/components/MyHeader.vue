<template>
  <div class="row">
    <div class="header">
      <button @click="toggleSelectText" class="selectBtn">
        {{ selectText ? "選取" : "取消" }}
      </button>
      <button class="addBtn" @click="uploadAvatar">十</button>
      <input
        type="file"
        multiple="multiple"
        v-show="false"
        ref="avatar"
        @change="onFile"
      />
    </div>
    <div class="item">
      <div
        class="loadImage"
        v-for="(item, index) in image"
        :key="index"
        @click="show(index)"
      >
        <img :src="item" />
        <input
          type="checkbox"
          :value="item"
          :cheched="images.includes(item)"
          v-model="images"
          v-show="selectText === false"
        />
        <button @click="deleteImages" v-show="selectText === false">
          Delete
        </button>
        <div v-show="images.includes(item)" class="selectState">✅</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyHeader",
  data() {
    return {
      image: [],
      images: [],
      selectText: true,
      activeIndex: -1,
    };
  },
  methods: {
    // 模擬點擊
    uploadAvatar() {
      this.$refs.avatar.click();
    },
    show(index) {
      this.activeIndex = this.activeIndex == index ? -1 : index;
    },
    onFile(e) {
      for (let item of e.target.files) {
        // 另外設一個變數接vm的this，不然下面的this.result指向readAsDataURL
        let _this = this;
        // 轉換base64
        let reader = new FileReader();
        // 把相片名稱push到data裡，即時跑出相片信息
        reader.addEventListener("load", function () {
          _this.image.push(this.result);
        });
        reader.readAsDataURL(item);
        const form = new FormData();
        form.append("files", item);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        axios.post("http://127.0.0.1:8080/upload", form, config).then((res) => {
          console.log("success===", res.data.successResults);
        });
      }
    },
    toggleSelectText() {
      this.selectText = !this.selectText;
    },
    deleteImages() {
      console.log(this.images);
      // console.log(JSON.parse(JSON.stringify(this.test[0])));
      // this.image.splice(index, 1);
      axios
        .delete("http://127.0.0.1:8080/delete", {
          params: {
            names: this.images,
          },
        })
        .then((res) => {
          console.log(res.data);
        });
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
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.loadImage img {
  width: 100%;
  height: 100%;
}
.selectState {
  width: 20px;
  height: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
