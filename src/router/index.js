import VueRouter from "vue-router";

// 引入組件
import Video from "../components/MyVideo";
import Gallery from "../components/MyGallery";
import Album from "../components/MyAlbum";
import Main from "../components/MyMain";

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
