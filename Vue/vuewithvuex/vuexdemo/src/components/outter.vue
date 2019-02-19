<template>
  <div>
    <div>我是outter组件拿到的全局状态{{getOutNum}}</div>
  </div>
</template>
<script>
export default {
  name: "outter",
  computed: {
    getOutNum: function() {
      return this.$store.state.num;
    }
  }
};
</script>
<style scoped>
</style>