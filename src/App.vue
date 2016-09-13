<!-- 全局样式 -->
<style lang="styl" src='./assets/styl/main.styl'></style>
<style lang="styl">
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <h1>Hello World!!!</h1>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { setDetail, getStore } from './vuex/actions/user_actions'
  export default {
    vuex: {
      actions: {
        setDetail,
        getStore
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