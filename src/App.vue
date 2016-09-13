<!-- 全局样式 -->
<style lang="styl" src='./assets/styl/main.styl'></style>
<style lang="styl">
</style>
<template>
  <div id="app">
    <h1>Hello World!!!</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  export default {
    vuex: {
      actions: {
      }
    },
    store,
    components: {
    },
    ready () {
      // 设置基本信息到userInfo
    }
  }
</script>