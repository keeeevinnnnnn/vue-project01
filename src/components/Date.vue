<template>
  <div class="row">
    <div class="col" v-for="(v, i) in menu" :key="i">
      <button
        class="btn"
        :class="activeColor == i ? 'active' : ''"
        @click="btnBgc(i)"
      >
        {{ v }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Date",
  data() {
    return {
      menu: ["年", "月", "日"],
      activeColor: 0, // -1表示默認不選擇顏色,0表示默認選擇第一个
    };
  },
  methods: {
    btnBgc(i) {
      this.activeColor = i;
    },
  },
};
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid rgb(209, 209, 209);
}
.col {
  width: 90%;
  margin-bottom: 15px;
  background-color: lightgray;
}

.btn {
  width: 33.33%;
  border: none;
  font-size: 1.15rem;
  padding: 10px 0;
  background-color: lightgray;
}
.active {
  width: 100%;
  border-radius: 25px;
  background-color: grey;
  color: white;
}
</style>
