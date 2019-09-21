<template>
  <div class="layout">
    <AppBar></AppBar>
    <Navigation></Navigation>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "Layout",
  components: {
    AppBar,
    Navigation
  }
};
</script>

<style>
</style>
