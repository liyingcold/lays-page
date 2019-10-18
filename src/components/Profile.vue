<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
    <button @click="requestUserId()">获取用户名</button>
   
  </div>
</template>

<script>
export default {
  name: 'HelloProfile',
  data () {
    return {
      msg: 'Welcome to HelloProfile'
    }
  },
  methods: {
      requestUserId(){
        // 参数传递 方式一 
          // this.msg=this.$route.params.id
          // 参数传递 方式二
          this.msg=this.$route.query.name
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
