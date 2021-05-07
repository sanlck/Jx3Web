import Vue from 'vue'
import Jx3Main from './Jx3Main.vue'
import router from './router'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  render: h => h(Jx3Main),
  router
}).$mount('#main')
