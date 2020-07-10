import Vue from 'vue'
import router from './router'
import App from './App'

const serverURL='http://localhost:3000/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})







