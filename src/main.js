import Vue from 'vue'
import ElementUI from 'element-ui'
import VueCodeMirror from 'vue-codemirror'
import App from './App.vue'
import router from '@/plugin/router'
import store from '@/plugin/store'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
