<template>
  <div class="wrapper" @click="$emit('onClickItem')">
    <div class="title">{{ title }}</div>
    <div class="contents">{{ contentsText }}</div>
  </div>
</template>

<script>
  export default {
    name: "DraftListItem",
    props: {
      title: {
        type: String,
        required: true,
      },
      contents: {
        type: String,
        required: true,
      }
    },
    computed: {
      contentsText () {
        // TODO: html 제거하고 text만 보이도록
        return this.contents;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 88px;
    overflow: hidden;
    padding: 11px 16px 13px;
    text-align: left;
    box-sizing: border-box;
  }

  .title {
    font-size: 16px;
    color: rgba(0,0,0,0.87);
    line-height: 24px;
  }

  .contents {
    height: auto;
    max-height: 42px;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.54);

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
