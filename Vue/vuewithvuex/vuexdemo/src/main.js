import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    num: 88
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
