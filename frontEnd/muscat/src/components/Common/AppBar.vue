<template>
  <div class="toolbar-wrapper">
    <div class="input-wrapper">
      <i class="muscat-icon-search" style="color: #87bf8e;"></i>
      <input class="input" v-model="keyword" placeholder="검색어 입력" @keyup.enter="onEnter(keyword)">
      <i class="muscat-icon-cancel" style="color: #e0e0e0;" @click="onCancel"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppBar',
    data () {
      return {
        keyword: '',
      };
    },
    methods: {
      onEnter (keyword) {
        this.$emit('search', keyword);
      },
      onCancel () {
        this.$emit('cancel');
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
    padding: 8px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-wrapper {
    width: 100%;
    height: 100%;

    background-color: white;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 8px 12px;

    input {
      outline: none;

      margin: 0 8px;
      line-height: 20px;
      font-size: 14px;
      width: 100%;
    }
  }
</style>
