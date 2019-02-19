<template>
  <div>
    <div>parent
      <parent/>
    </div>
    <hr>
    <outter/>
  </div>
</template>
<script>
import parent from "./parent";
import outter from "./outter";
export default {
  name: "hello",
  components: {
    parent,
    outter
  },
  computed: {
    getNum: function() {
      return this.$store.state.num;
    }
  }
};
</script>
<style scoped>
</style>