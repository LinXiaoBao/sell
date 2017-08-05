<template>
  <div id="app">
    <topbar></topbar>
    <tab></tab>
    <my-content></my-content>
  </div>
</template>

<script>
import topbar from './components/topbar/topbar.vue'
import tab from './components/tab/tab.vue'
import myContent from './components/myContent/myContent.vue'

export default {
  components: {
    topbar,
    tab,
    myContent
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
