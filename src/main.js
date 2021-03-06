// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import md5 from 'js-md5' 

import 'normalize.css'
import './assets/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

window.eventBus = new Vue();//

Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
