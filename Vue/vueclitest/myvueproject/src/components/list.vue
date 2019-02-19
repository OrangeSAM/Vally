<template>
  <ul>
    <li>
      <router-link :to="{name:'helloshenzhen',params:{shenzhenmsg:'你好深圳'}}">hello shenzhen</router-link>
    </li>
    <li>
      <router-link :to="{name:'helloworld',params:{worldmsg:'你好世界'}}">hello world</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list"
};
</script>

<style scoped>
</style>