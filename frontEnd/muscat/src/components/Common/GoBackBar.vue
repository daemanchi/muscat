<template>
  <div class="toolbar-wrapper">
    <a class="go_back" @click="$router.go(-1)">
      <i class="muscat-icon-chevron-left" style="color: #707070;"></i>
    </a>
    <button type="button" class="btn_like" @click="likePost()">
      <i :class="[this.$store.state.postLiked ? 'muscat-icon-heart-solid' : 'muscat-icon-heart-regular']" style="color: #87bf8e;"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "GoBack",
  computed: {
    getLiked() {
      return this.$store.getters.getLiked;
    }
  },
  methods: {
    likePost() {
      this.$store.commit('TOGGLE_LIKED', this.liked)
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar-wrapper {
  background-color: #f5f5f5;
  box-sizing: border-box;
  width: 100vw;
  height: 55px;
  padding: 15px 16px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;

  .btn_like {
    position: absolute;
    top: 13px;
    right: 16px;
  }
  .btn_like i {
    font-size: 21px;
  }
  .muscat-icon-heart-solid:before{
    background-image: linear-gradient(to bottom, #b8f2be, #fff940);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.go_back {
  display: inline-block;
  vertical-align: top;
}
.muscat-icon-chevron-left {
  font-size: 20px;
  cursor: pointer;
}
</style>
