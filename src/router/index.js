import Vue from 'vue'
import Jx3Main from '../Jx3Main.vue'
import Statements from '../components/Statements.vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push

Vue.use(Router)

export default new Router({
	routes: [
	    // {
	    //   path: '/',
	    //   name: 'Jx3Main',
	    //   component: Jx3Main
	    // },
	    {
	      path:'/Statements',
	      name:'Statements',
	      component:Statements
	    }
	  ]
})