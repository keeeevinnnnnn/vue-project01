const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 這裡的url是指將要發送api的url，不是本地端url
    proxy: "http://127.0.0.1:8080",
  },
  lintOnSave: false,
});
