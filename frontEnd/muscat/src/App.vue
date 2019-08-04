<template>
  <div id="app">
    <AppBar />
<!--    <DepthBar :icon="'muscat-icon-heart-solid'" />-->

    <Dialog>
      <template v-slot:title>
        <span>다이얼로그 타이틀</span>
      </template>
      <template v-slot:content>
        <span>다이얼로그 내용</span>
      </template>
    </Dialog>

    <div style="position: fixed; bottom: 0;">
      <Navigation :selected="`Home`" />
    </div>

  </div>
</template>

<script>
  import AppBar from '@/components/Common/AppBar';
  // import DepthBar from '@/components/Common/DepthBar';
  import Dialog from '@/components/Common/Dialog';
  import Navigation from '@/components/Common/Navigation';

  export default {
    components: { AppBar, Dialog, Navigation },
  }
</script>

<style lang="scss">
  @import './assets/css/style.css';

  html, body, button, input {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
