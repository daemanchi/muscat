<template>
  <div id="app">
<!--    <AppBar />-->
    <DepthBar :icon="{ name: 'muscat-icon-folder', color: '#87bf8e' }"
              @onClickIcon="onClickFolder" />

    <router-view />

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

<!--    <div style="position: fixed; bottom: 0;">-->
<!--      <Navigation :selected="`Home`" />-->
<!--    </div>-->

    <!-- <Login /> -->
    <SignUp />
  </div>
</template>

<script>
  // import Login from "./components/Login";
  import SignUp from "./components/SignUp";
  import AppBar from '@/components/Common/AppBar';
  import DepthBar from '@/components/Common/DepthBar';
  import Dialog from '@/components/Common/Dialog';
  import DraftListItem from "./components/DraftListItem";
  import Navigation from '@/components/Common/Navigation';

  import { mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    components: { SignUp, DraftListItem, DepthBar, AppBar, Dialog, Navigation },
    computed: {
      ...mapGetters('blog', ['drafts']),
    },
    data () {
      return {
        dialog: false,
        draftPage: 1,
      };
    },
    methods: {
      ...mapActions('blog', [ 'selectBlogs', 'selectBlog' ]),
      ...mapMutations('blog', ['SELECT_BLOGS', 'SELECT_BLOG']),
      onClickFolder () {
        this.selectBlogs({ page: this.draftPage, count: 10, stat: 'draft' }).then(response => {
          console.log(response);
          this.draftPage++;
          this.SELECT_BLOGS({ stat: 'draft', response });
        }).catch(err => {
          console.error(err);
        });
        this.dialog = true;
      },
      onClickDraft (blogId) {
        this.selectBlog(blogId).then(response => {
          this.SELECT_BLOG(response);
          this.dialog = false;
          this.$router.push({ name: 'Write' });
        });
      },
      selectMoreDraft () {
        this.selectBlogs({ page: this.draftPage, count: 10, stat: 'draft' }).then(response => {
          console.log(response);
          this.draftPage++;
          this.SELECT_BLOGS({ stat: 'draft', response });
        }).catch(err => {
          console.error(err);
        })
      }
    }
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
    color: #2c3e50;
  }
</style>
