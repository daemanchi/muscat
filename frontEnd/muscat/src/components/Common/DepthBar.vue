<template>
  <div class="toolbar-wrapper">

    <i class="muscat-icon-chevron-left" style="color: #707070;" @click="goBack"></i>
    <i :class="icon.name" :style="{ color: icon.color }" @click="onClickIcon"></i>

  </div>
</template>

<script>
  export default {
    name: 'DepthBar',
    props: {
      icon: {
        type: Object,
      }
    },
    data () {
      return {
        keyword: '',
      };
    },
    methods: {
      goBack () {
        this.$emit('back');
        this.$router.go(-1);
      },
      onClickIcon () {
        this.keyword = '';
        this.$emit('onClickIcon');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar-wrapper {
    background-color: #f5f5f5;

    box-sizing: border-box;

    width: 100vw;
    height: 55px;
    padding: 8px 16px;
    border-bottom: 1px solid #e0e0e0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
