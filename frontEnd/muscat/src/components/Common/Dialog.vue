<template>
  <div class="mask">

    <div class="dialog-box">
      <div class="dialog-title">
        <h4>
          <slot name="title"></slot>
        </h4>
        <i class="muscat-icon-cancel" style="font-size: 20px; color: #87bf8e;" @click="$emit('close')"></i>
      </div>
      <!-- TODO: 타이틀 바 고정 -->

      <div class="dialog-content">
        <slot name="content"></slot>
      </div>

      <div style="width: 100%; height: 48px; display:flex;">
        <button style="width: 100%; height: 100%;" @click="$emit('onClickMore')">더보기</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Dialog'
  }
</script>

<style lang="scss" scoped>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(black, 0.2);
  }

  .dialog-box {
    position: relative;
    width: 90%;
    max-height: 70%;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 19px 38px 0 rgba(0, 0, 0, 0.26);

    overflow-y: scroll;
  }

  .dialog-title {
    display: flex;
    box-sizing: border-box;
    padding: 14px 16px 11px 13px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    h4 {
      margin: 0;
    }
  }

  .dialog-content {
    margin-top: 48px;
  }

</style>
