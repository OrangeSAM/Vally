import router from 'vue-router'
import Vue from "vue"
//vue的大小写不能拼错

import HelloWorld from "../components/HelloWorld.vue"
import HelloShenzhen from "../components/HelloShenzhen.vue"

Vue.use(router);
//配置路由
export default new router({
  //routes可以定义很多个
  routes: [{
      name: 'helloworld',
      path: '/helloworld/:worldmsg', //指定要跳转的路径
      component: HelloWorld //指定要跳转的路径
    },
    {
      name: 'helloshenzhen',
      path: '/helloshenzhen/:shenzhenmsg',
      component: HelloShenzhen
    }
  ]
})
