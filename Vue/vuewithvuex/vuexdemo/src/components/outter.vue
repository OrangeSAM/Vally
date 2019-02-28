<template>
  <div>
    <div>我是outter组件拿到的全局状态{{getOutNum}}</div>
    <button @click="outadd">outter组件----改变全局状态按钮</button>
    <button @click="outaddAction">父组件----改变状态按钮（decrease action）</button>
  </div>
</template>
<script>
export default {
  name: "outter",
  computed: {
    getOutNum: function() {
      return this.$store.state.num;
    }
  },
  methods: {
    outadd: function() {
      this.$store.commit("increase");
    },
    outaddAction: function() {
      this.$store.dispatch("decreaseAction");
    }
  }
};
</script>
<style scoped>
</style>