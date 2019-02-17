import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.use(router);

//配置路由
var rt = new router({
  //routes可以定义很多个
  routes: [{
    path: '/hello',
    component: HelloWorld
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rt,
  render: h => h(App)
  // components: {
  //   App
  // },
  // template: '<App/>'
})
