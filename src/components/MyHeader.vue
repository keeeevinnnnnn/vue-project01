<template>
  <div class="row">
    <div class="header">
      <div class="headerLeft">
        <button v-if="selectText === false" @click="deleteImages">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

      <div class="headerRight">
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
    </div>
    <div class="item">
      <div class="loadImage" v-for="(item, index) in image" :key="index">
        <img
          :src="`http://127.0.0.1:8080/image/${item}`"
          @click="selectImage(item)"
        />
        <div v-show="selectData.includes(item)" class="selectState">✅</div>
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
      selectText: true,
      selectData: [],
      isShowSelect: false,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8081/images/?fromName=${this.image}&amount=50`)
      .then((res) => {
        res.data.forEach((e) => {
          this.image.push(e);
        });
      });
  },
  methods: {
    // 模擬點擊
    uploadAvatar() {
      this.$refs.avatar.click();
    },
    selectImage(item) {
      // 拿到該元素在陣列的索引值
      let i = this.selectData.indexOf(item);
      // 如果有打開選取才能進行操作
      if (this.selectText === false) {
        if (this.selectData.includes(item)) {
          this.selectData.splice(i, 1);
        } else {
          this.selectData.push(item);
        }
      }
    },
    onFile(e) {
      for (let item of e.target.files) {
        const form = new FormData();
        form.append("files", item);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        axios.post("http://127.0.0.1:8080/upload", form, config).then((res) => {
          console.log("success===", res.data.successResults);
          res.data.successResults.forEach((e) => {
            this.image.push(e);
          });
        });
      }
    },
    toggleSelectText() {
      this.selectText = !this.selectText;
    },
    deleteImages() {
      axios
        .delete("http://127.0.0.1:8080/delete", {
          data: this.selectData,
        })
        .then((res) => {
          console.log(res.data);
          const result = Object.keys(res.data);

          result.forEach((v) => {
            let i = this.image.indexOf(v);
            this.image.splice(i, 1);
          });
        });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.headerRight button {
  background-color: grey;
  color: white;
  font-size: 1rem;
  border: none;
}
.headerLeft button {
  background-color: white;
  color: red;
  font-size: 1rem;
  border: none;
  height: 100%;
  font-size: 24px;
  margin-left: 10px;
}

.selectBtn {
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
}
.addBtn {
  height: 100%;
  margin-right: 10px;
  border-radius: 50%;
  padding: 0 13px;
}
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
