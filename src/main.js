import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import createElement from "@/plugins/element3.js";
// 重置样式
import "@/static/reset.css";
// 设置字体大小
import "amfe-flexible";

const app = createApp(App);
createElement(app);
app.use(router);
app.use(store);
app.mount("#app");
