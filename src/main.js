import Vue from 'vue'
import Jx3Main from './Jx3Main.vue'
import router from './router'
import index_login from './index_login.vue'
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)
// Vue.config.productionTip = false

new Vue({
  render: h => h(index_login),
  router
}).$mount('#main')
