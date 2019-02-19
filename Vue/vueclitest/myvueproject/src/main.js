import Vue from 'vue'
import App from './App'
import rt from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rt,
  render: h => h(App)
})
