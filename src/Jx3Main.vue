<template>
  <div id="app">
	  <!-- <vue-particles
	        color="#dedede"
	        :particleOpacity="0.7"
	        :particlesNumber="40"
	        shapeType="star"
	        :particleSize="4"
	        linesColor="#FFFFFF"
	        :linesWidth="2"
	        :lineLinked="true"
	        :lineOpacity="0.4"
	        :linesDistance="150"
	        :moveSpeed="3"
	        :hoverEffect="true"
	        hoverMode="grab"
	        :clickEffect="true"
	        clickMode="push"
	        class="cash">
	      </vue-particles> -->
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
	/* @import url("./css/lizi.css"); */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url(images/background.87f99497.png);

}
</style>
