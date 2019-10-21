import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path:'*',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: ()=>import('../components/HelloWorld'),//懒加载
      children:[
        {
          path:'',
          redirect:'news',
        },
        {
          path:'news',
          name:'HomeNews',
          component:()=>import('../components/HomeNews'),
           /*路由元信息*/  
           meta:{
            title:'新闻'//导航标题
          }
        },
        {
          path:'message',
          name:'HomeMessage',
          component:()=>import('../components/HomeMessage'),
          meta:{
            title:'消息'
          }
       
        },
        {
          // path:'profile/:id',///参数传递 方式一
          path:'profile',//参数传递 方式二
          component:()=>import('../components/Profile'),
          meta:{
            title:'档案'
          }
        },
        {
          path:'promise',
          component:()=>import('../components/Promise'),
          meta:{
            title:'es6'
          }
        }
      ],
      meta:{
        title:'首页'
      }
    }
  ]
})
/*1、全局守卫，从from跳转到to
  2、一个路由匹配到的所有路由记录会暴露为$route对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组
  3、获取mate内容*/ 
router.beforeEach((to,from,next)=>{
  console.log('%c 前置钩子','color:blue')
  console.log(to,from)
  console.log(document.title)
  console.log(to.meta.title)
  next()
})

/* 后置钩子，跳转后回调*/
router.afterEach(()=>{
  
})

export default router
