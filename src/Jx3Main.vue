<template>
  <div id="app">
    <Jx3MainLog/>
  </div>
</template>

<script>
import Jx3MainLog from './components/Jx3MainLog.vue'

export default {
  name: 'app',
  components: {
    Jx3MainLog
  }
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
  background-color: #2C3E50;

}
</style>
