<template>
  <div id="app">
    <div class="wrap">
      <GoBack v-if="$route.meta.goBack"></GoBack>
      <AppBar v-else></AppBar>
      <router-view></router-view>
      <Navigation></Navigation>
    </div>

    <Dialog v-show="dialog"
            @close="dialog = false"
            @onClickMore="selectMoreDraft"
    >
      <template v-slot:title>
        <span>작성중이던 글 불러오기</span>
      </template>
      <template v-slot:content>
        <DraftListItem v-for="(draft, index) of drafts" :key="index"
                       @onClickItem="onClickDraft(draft.BLOG_ID)"
                       :title="draft.BLOG_TITLE"
                       :contents="draft.BLOG_CONTENTS" />
      </template>
    </Dialog>
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

<style lang="scss">
@import './assets/css/style.css';

html, body, h1, h2, h3, h4, h5, h6, ul, li, p, button, input {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
