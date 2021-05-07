import Vue from 'vue'
import Jx3Main from '../Jx3Main.vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes:[
		{path:'/',name:'Jx3Main',component:Jx3Main}
	]
})