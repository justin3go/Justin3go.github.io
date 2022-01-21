// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Comment from "./components/Comment.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component("Comment", Comment);
  },
};