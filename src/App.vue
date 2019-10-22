<template>
  <div id="app">
      <h2>{{message}}</h2>
      <hr>
    <!-- <router-view/> -->
    <hello-vuex/>
    
  </div>
</template>

<script>
import HelloVuex from './components/vuex/HelloVuex'
export default {
  name: 'App',
  data() {
    return {
      message:'app组件'
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
