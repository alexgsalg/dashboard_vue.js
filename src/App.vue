<template>
  <div id="app">
    <SideBar />
    <!-- <div id="nav"><router-link to="/">Area do cliente</router-link> |</div> -->
    <router-view />
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
@import "src/assets/sass/main.scss";
</style>
