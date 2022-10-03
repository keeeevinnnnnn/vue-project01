import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
// 引入路由器

import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  render: (h) => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
