import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// 引入wifi模块
import wifi from 'node-wifi'

// 引入xterm
import xterm from './Xterm'
import 'xterm/css/xterm.css'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 初始化xterm
Vue.xterm = Vue.prototype.$xterm = xterm

// 初始化WiFi模块
Vue.wifi = Vue.prototype.wifi = wifi
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
