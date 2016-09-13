<template>
  <h1>第二个页面</h1>
</template>
<script>
  export default {
    vuex: {
      getters: {
      },
      actions: {
      }
    },
    data () {
      return {
        listData: []
      }
    },
    ready () {
      this.getData()
    },
    watch: {
      'page': 'getData'
    },
    methods: {
    },
    components: {
    }
  }
</script>