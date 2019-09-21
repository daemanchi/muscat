<template>
  <div class="toolbar-wrapper">
    <div v-for="(tab, index) of tabs"
         :key="index"
         :class="{ active: selected === tab.value }"
         class="tab-item">
      <div class="icon-holder">
        <i :class="tab.icon"></i>
      </div>
      <div class="tab-name">{{ tab.name }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    props: [ 'selected' ],
    data () {
      return {
        tabs: [
          { icon: 'muscat-icon-home', name: '홈', value: 'Home' },
          { icon: 'muscat-icon-feed', name: '모아보기', value: 'Feed' },
          { icon: 'muscat-icon-bell', name: '알림', value: 'Notifications' },
          { icon: 'muscat-icon-smile', name: '내정보', value: 'MyPage' },
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar-wrapper {
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100vw;
    height: 56px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .tab-item {
    min-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #e0e0e0;
    &.active {
      color: #87bf8e;
    }
    .tab-name {
      font-size: 14px;
      line-height: 17px;
      margin-top: 4px;
    }
  }

  .icon-holder {
    width: 24px;
    height: 24px;
    margin: auto;
  }
</style>
