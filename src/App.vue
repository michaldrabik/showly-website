<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
html, body {
  position: relative;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
