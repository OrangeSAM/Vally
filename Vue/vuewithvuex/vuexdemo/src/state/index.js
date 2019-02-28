import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 88
  },
  mutations: {
    //定义状态改变函数
    increase: function (state) {
      state.num++
    },
    decrease: function (state) {
      state.num = state.num - 20
    },
    // inscrease(){
    // 这样也行
    // }
  },
  actions: {
    //context为上下文对象
    decreaseAction: function (context) {
      //actions中只能对mutation进行操作
      setTimeout(function () {
        context.commit('decrease');
      }, 1000)
    }
  },
  getters: {
    getNum(state) {
      return state.num > 0 ? state.num : 0
    }
  }
})
