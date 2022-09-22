<template>
  <div class="row">
    <div class="col">
      <button class="btn btnYear">年</button>
      <button class="btn btnMonth">月</button>
      <button class="btn btnDay">日</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {};
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
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: lightgray;
}

.btn {
  width: 33.33%;
  border-radius: 25px;
  border: none;
  font-size: 1.15rem;
  padding: 10px 0;
  background-color: lightgray;
}
.btnYear {
  background-color: grey;
  color: white;
}
</style>
