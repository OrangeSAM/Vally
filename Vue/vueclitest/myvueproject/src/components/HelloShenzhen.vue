<template>
  <div class="hello">
    <h1>this is hello shenzhen</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloShenzhen",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
