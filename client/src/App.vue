<template>
  <div id="app">
    <top-bar/>
    <router-view/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    'top-bar':TopNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
