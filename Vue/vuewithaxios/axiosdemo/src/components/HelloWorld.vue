<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="getdata">click to get resouce</button>
    <button @click="postdata">click here to post data</button>
    <ul>
      <li v-for="item in cnode" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import vue from "vue";
import qs from "qs";
vue.prototype.$http = axios;

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cnode: []
    };
  },
  methods: {
    getdata: function() {
      console.log(this);
      //var that =this
      this.$http
        .get("https://cnodejs.org/api/v1/topics")
        .then(
          // function(res) {
          //   console.log(this);
          //   这里的this是undefined？
          //   如果要使用function而不是箭头函数，应该先在外面获得this
          //   console.log(res);
          // }
          result => {
            this.cnode = result.data.data;
            console.log(result.data.data);
          }
        )
        .catch(err => {
          console.log(err);
        });
    },
    postdata: function() {
      this.$http
        .post(
          "/user",
          qs.stringify({
            firstName: "Fred",
            lastName: "Flintstone"
          })
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
