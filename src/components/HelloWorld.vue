<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- 参数传递 方式一 -->
    <!-- <router-link :to="'/home/profile/'+userId">用户信息</router-link> -->
   
    <!-- 参数传递 方式二 -->
    <!-- <router-link :to="{path:'/home/profile',query:{name:'wyy'}}">多个用户信息</router-link> -->

    <!-- 使用代码配置动态路由  -->
    <button @click="profileClick()">档案</button>

    <router-link to="/home/promise">promise</router-link>    
    <keep-alive>
      <router-view/>
    </keep-alive>
   
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'home组件',
      userId:'muzi'
      
    }
  },
  methods: {
    
    profileClick(){
      // 使用代码配置动态路由 参数传递 方式一
      // this.$router.push('/home/profile/'+this.userId)
      // 使用代码配置动态路由 参数传递 方式二
      this.$router.push({
        path:'/home/profile',query:{name:'wyy'}
      })
    }
  },
  destroyed() {
    
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
hr{
  width:95%;
}
</style>
