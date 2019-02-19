<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 覆盖了自己的data -->
    <span>我是子组件</span>
    ---{{msg}}
    <div>我是全局状态{{getNum}}</div>
    <div>
      <button @click="sendMsgToFather">send message to father</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "son",
  data() {
    return {
      sonmsg: "我是来自子组件的消息"
    };
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendMsgToFather: function() {
      this.$emit("handle", this.sonmsg);
    }
  },
  computed: {
    getNum: function() {
      return this.$store.state.num;
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
