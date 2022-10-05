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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  props: ["addImage", "parentImage", "deleteImage"],
  data() {
    return {
      selectText: true,
    };
  },
  methods: {
    // 模擬點擊
    uploadAvatar() {
      this.$refs.avatar.click();
    },
    toggleSelectText() {
      this.selectText = !this.selectText;
      this.$bus.$emit("selectText", this.selectText);
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
            const imageObj = { id: e, state: false };
            // 將image回調給父層
            this.addImage(imageObj);
          });
        });
      }
    },
    deleteImages() {
      // 拿到選取成功的該相片
      const arr = this.parentImage.filter((v) => {
        return v.state == true;
      });
      // 轉換成符合api格式陣列
      const readyDeleteImages = arr.map((e) => e.id);
      axios
        .delete("http://127.0.0.1:8080/delete", {
          data: readyDeleteImages,
        })
        .then((res) => {
          // 將刪除成功res轉成陣列
          const result = Object.keys(res.data);
          console.log("@result", result);
          result.forEach((v) => {
            // 轉換成一般陣列
            const arr = this.parentImage.map((e) => e.id);
            // 拿到索引值
            const i = arr.indexOf(v);
            this.deleteImage(i);
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
</style>
