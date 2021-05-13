<template>
	<div id="LoginReg">
		<nav class="index_nav__Ht7Gu">
			<div class="Action_navBarActionText__3GvRr"></div>
		</nav>
		<reg/>
		<div class="index_operations__1pE83">
		  <div class="index_operationBtn__29u3T">登录</div>
		  &nbsp;&nbsp;·&nbsp;&nbsp;
		  <div class="index_operationBtn__29u3T index_actived__1pnV_">注册</div>
		</div> 
	</div>
</template>
<script>
	import login from './components/login.vue';
	import reg from './components/reg.vue'
	
	export default {
	  name: 'LoginReg',
	  components: {
	    reg
	  }
	}
	
</script>

<style>
	@import url("css/index_login.css");
</style>
