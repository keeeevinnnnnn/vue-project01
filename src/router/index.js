import VueRouter from "vue-router";

// 引入組件
import Video from "../pages/Video";
import Gallery from "../pages/Gallery";
import Album from "../pages/Album";

// 創建並匯出一個路由器
export default new VueRouter({
  routes: [
    {
      path: "/video",
      component: Video,
    },
    {
      path: "/gallery",
      component: Gallery,
    },
    {
      path: "/album",
      component: Album,
    },
  ],
});
