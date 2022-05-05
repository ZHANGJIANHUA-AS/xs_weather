<template>
  <div id="app">
    <Excel />
  </div>
</template>

<script>
import Excel from './components/Excel.vue'

export default {
  name: 'App',
  components: {
    Excel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
