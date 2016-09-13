<template>
  <h1>test</h1>
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