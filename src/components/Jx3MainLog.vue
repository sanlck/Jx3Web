<template>
	<div id="jx3main">
		<div class="lis" >
			<a @click="Statements">点击</a>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	methods:{
		Statements:function(){
			this.$router.push({name:'Statements'})
			// const { href } = this.$router.push({
			//     name: "Statements"
			// });
			// window.open(href, '_blank');
		}
	}
}
</script>

<style >
	#jx3main{
		width: 75%;
		height: 1000px;
		background-color: #ffffff;
		margin: auto;
		padding-top: 20px;
	}
	/* .lis{
		width: 150px;
		height: 150px;
		background-color: #1A867D;
		border-radius: 25px;
		list-style-type:none;
	} */
</style>
