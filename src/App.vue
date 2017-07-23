<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <topbar></topbar>
    <tab></tab>
    <my-content></my-content>
  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import tab from './components/tab.vue'
import myContent from './components/content.vue'

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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
