<template>
  <div id="app">
    <div class="wrap">
      <GoBack v-if="$route.meta.goBack"></GoBack>
      <AppBar v-else></AppBar>
      <router-view></router-view>
      <Navigation></Navigation>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/Common/AppBar"
import GoBack from "./components/Common/GoBackBar"
import Navigation from "./components/Common/Navigation"

export default {
  name: "app",
  components: {
    AppBar,
    GoBack,
    Navigation
  }
};
</script>

<style>
html, body, h1, h2, h3, h4, h5, h6, ul, li, p{
    margin: 0;
    padding: 0;
}
#app {
  background-color: rgb(249,249,249);
}
</style>
