<template>
	<div id="_index">
		<div class="content">
			
			<div class="common_layoutContent">
				<div class="common_layoutContent__YdkkB">
					<div class="index_loginViewCardTitle__1bgy5">注册</div>
					<div class="index_inputWrapper__Du7MB " ref="user111">
						<div class="index_inputWrapper__Du7MC">
							<input type="text" class="index_input" @blur="jyuser" ref="user" placeholder="请输入用户名">
						</div>
						<div class="Item_formItemErrorMessage__1fmbI">{{ userv }}</div>
					</div>
					<div class="index_inputWrapper__Du7MB">
						<div class="index_inputWrapper__Du7MC">
							<input type="password" class="index_input" @blur="jypwd" ref="pwd" placeholder="请输入密码">
						</div>
						<div class="Item_formItemErrorMessage__1fmbI">{{ pwdv }}</div>
					</div>
					<div class="index_inputWrapper__Du7MB">
						<div class="index_inputWrapper__Du7MC">
							<input type="text" class="index_input" @blur="jyemail" ref="email" placeholder="请输入邮箱">
						</div>
						<div class="Item_formItemErrorMessage__1fmbI">{{ emailv }}</div>
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
		data() {
		        return {
		            userv: '',
		            pwdv: '',
					emailv: '',
		        }
		    },
		methods:{
			reg(){
				var urlData = require('../json/url.json');
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.pwd.value,
					"email":this.$refs.email.value
				}  //定义一个data储存需要带的参数
				if(params.username.length==0){
					this.userv="*用户名不能为空";
					return;
				}
				if(params.username.password==0){
					this.userv="*密码不能为空";
					return;
				}
				if(params.username.email==0){
					this.userv="*邮箱不能为空";
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
			},
			jyuser(){
				var user=this.$refs.user.value;
				if(user.length==0){
					this.userv="*用户名不能为空";
					this.$refs.user.style.backgroundColor = "#FFB6C1";
				}
			},
			jypwd(){
				var user=this.$refs.user.value;
				if(user.length==0){
					this.pwdv="*密码不能为空";
				}
			},
			jyemail(){
				var user=this.$refs.user.value;
				if(user.length==0){
					this.emailv="*邮箱不能为空";
				}
			}
		}
	}
</script>

<style>
	/* @import url("../css/reg.css"); */
	.index_inputWrapper__Du7MC .index_input{
		
	}
	.index_inputWrapper__Du7MB{
		height: 35px;
	}
	.index_inputWrapper__Du7MB .Item_formItemErrorMessage__1fmbI{
		font-size: .6em;
		float: left;
		color: red;
	}
	.index_inputWrapper__Du7MD{
		display: flex;
		border:1px solid #158fc5;
		margin-top: 50px;
		height: 32px;
		border-radius: 15px;
		background-color: #158fc5;
	}
	
	.common_layoutContent{
		width: 20em;
		height: 25em;
		text-align: center; 
		background-color: #fff;
		border-radius: 1.2em;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: hsla(0,0%,100%,.8);
		opacity:0.8;
	}
	.common_layoutContent__YdkkB{
		width: 20em;
		height: 25em;
		position: relative;
		background-color: hsla(0,0%,100%,.8);
		border-radius: 1.2em;
		box-shadow: 0 2px 10px -5px rgba(9,2,4,.8);
		padding: 2em;
		box-sizing: border-box;
		text-align:center;
	}
	.index_inputWrapper__Du7MC .index_input{
		outline:none;
	}
	
	
</style>
