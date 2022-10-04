import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
// 引入路由器
import router from "./router";
// 圖片處理套件
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueViewer);
// Vue.use(IconsPlugin);
// Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  render: (h) => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件
  },
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
