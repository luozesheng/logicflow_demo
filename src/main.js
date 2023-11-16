import Vue from 'vue'
import Emitter from 'tiny-emitter';
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var emitter = new Emitter();
Vue.use(ElementUI)
window.Vue = Vue;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
