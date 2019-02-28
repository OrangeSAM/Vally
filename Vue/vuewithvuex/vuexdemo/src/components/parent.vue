<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>我是父组件</span>
    <div>我是父组件中拿到的全局状态{{getCount}}</div>
    <p>{{msgFromSon}}</p>
    <button @click="padd">父组件----改变全局状态按钮</button>
    <button @click="paddaction">父组件----改变状态按钮（decrease action）</button>
    <hr>
    <son :msg="tosonmsg" @handle="getMsgFromSon"></son>
  </div>
</template>

<script>
import son from "./son";
export default {
  name: "parent",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tosonmsg: " i am your father",
      msgFromSon:
        "我现在是父组件的消息，在子组件点击之后我将收到来自子组件的消息"
    };
  },
  methods: {
    getMsgFromSon: function(val) {
      this.msgFromSon = val;
    },
    padd: function() {
      this.$store.commit("increase");
    },
    paddaction: function() {
      this.$store.dispatch("decreaseAction");
    }
  },
  components: {
    son
  },
  computed: {
    getCount: function() {
      //return this.$store.state.num;
      return this.$store.getters.getNum;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
