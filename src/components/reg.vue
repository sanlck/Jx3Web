<template>
	<div id="_index">
		<div class="content">
			
			<div class="common_layoutContent">
				<div class="common_layoutContent__YdkkB">
					<div class="index_loginViewCardTitle__1bgy5">注册</div>
					<div class="index_inputWrapper__Du7MC">
						<input type="text" class="index_input" ref="user" placeholder="请输入用户名">
					</div>
					<div class="index_inputWrapper__Du7MC">
						<input type="password" class="index_input" ref="pwd" placeholder="请输入密码">
					</div>
					<div class="index_inputWrapper__Du7MC">
						<input type="text" class="index_input" ref="email" placeholder="请输入邮箱">
					</div>
					<div class="index_inputWrapper__Du7MD">
						<input @click="reg" type="button" class="index_input loginbut" id="login" value="注册"/>
					</div>
				</div>
			</div>
			
		</div>
	</div>			
</template>

<script>
	export default{
		
		methods:{
			reg(){
				var urlData = require('../json/url.json');
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.pwd.value,
					"email":this.$refs.email.value
				}  //定义一个data储存需要带的参数
				if(params.username.length==0){
					alert("用户名不能为空");
					return;
				}
				if(params.username.password==0){
					alert("密码不能为空");
					return;
				}
				if(params.username.email==0){
					alert("邮箱不能为空");
					return;
				}
				this.$axios.post(urlData.addJx3,params).then(function (resp){
					console.log(resp.data);
					if(resp.data.code==200){
						alert(resp.data.msg);
					}
				})
				// this.$axios.get(urlData.statements,params{}).then(function (resp){
				// 	console.log(resp.data);
				// })
			}
		}
	}
</script>

<style>
	@import url("../css/reg.css");
</style>
