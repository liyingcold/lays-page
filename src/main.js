// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// axios({
//   url:'https://free-api.heweather.net/s6/weather/lifestyle',
//   // 专门针对get请求的参数拼接
//   params:{
//     location:'beijing',
//     key:'46a723541ce941e9ae69efaad9a9e8a5'
//   }
// }).then(res=>{
//   console.log(res)
// })


// // 全局配置
// axios.defaults.baseURL="https://free-api.heweather.net/s6"
// axios.defaults.timeout=5000

// // 发送多个请求，且多个请求均成功后再做对应的操作
// axios.all([axios({
//   url:'/weather/lifestyle',
//   // 专门针对get请求的参数拼接
//   params:{
//     location:'beijing',
//     key:'46a723541ce941e9ae69efaad9a9e8a5'
//   }
// }),axios({
//   url:'/weather/lifestyle',
//   // 专门针对get请求的参数拼接
//   params:{
//     location:'beijing',
//     key:'46a723541ce941e9ae69efaad9a9e8a5'
//   }
// })])
// .then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
//  }))


// // 创建对应的axios实例
// const instance=axios.create({
//   baseURL:'https://free-api.heweather.net/s6',
//   timeout:'2000'
// })

// instance({
//   url:'/weather/lifestyle',
//   params:{
//         location:'beijing',
//         key:'46a723541ce941e9ae69efaad9a9e8a5'
//       }
// }).then(res=>{
//   console.log(res)
// })

// 封装request(axios)模块
// 导入
import {request} from './network/request';

request({
  url:'/weather/lifestyle',
  params:{
    location:'beijing',
    key:'46a723541ce941e9ae69efaad9a9e8a5'
        }
      },res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })