<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from "vue";
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

const gitalk = new Gitalk({
  clientID: "c84a8cd4b18c23716fea",
  clientSecret: "af69c39ab9cf6f56bc5fe45b91d6d13e04f98433",
  repo: "Justin3goBlogComment",
  owner: "Justin3go",
  admin: ["Justin3go"],
  id: (location.pathname).split("/").pop().substring(0, 49), // Ensure uniqueness and length less than 50
  language: "zh-CN",
  distractionFreeMode: false, // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
<style scoped>
</style>

