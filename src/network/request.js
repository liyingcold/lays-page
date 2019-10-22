/*封装多个实例的请求 */
import axios from 'axios'
import { resolve } from 'q'

// 方式一
// export function request(config,success,failure) {
//     // 创建实例
//     const instance=axios.create({
//         baseURL:'https://free-api.heweather.net/s6',
//         timeout:'5000'
//     })
//     // 发送真正的网络请求
//     instance(config)
//     // 将结果和异常回调出去，在这里处理不合适（传入两个回调函数
//     .then(res=>{
//         // console.log(res);
//         success(res);
//     })
//     .catch(err=>{
//         // console.log(err);
//         failure(err);
//     })
// }

// 包装promise的方式
// export function request(config) {
//     return new Promise((resolve,reject)=>{
//         const instance=axios.create({
//                     baseURL:'https://free-api.heweather.net/s6',
//                     timeout:'5000'
//         })
//         // 发送真正的网络请求
//         instance(config)
//         // 将结果和异常回调出去，在这里处理不合适（传入两个回调函数
//         .then(res=>{
//             resolve(res)
//         })
//         .catch(err=>{
//             reject(err)
//         })
//     })
// }


export function request(config) {
    // 1、创建实例
    const instance=axios.create({
        baseURL:'https://free-api.heweather.net/s6',
        timeout:'5000'
    })
    // 2、axios拦截器
    axios.interceptors.request.use(config=>{
        // 拦截下来进行操作后，必须返回一些东西，不然传不出去
        // 1、拦截后，可以将一些不符合服务器要求的信息进行修改后，再传出去
        // 2、每次发送请求时，可以展示友好信息提示
        // 3、某些网络请求（登录：必须携带一些特殊信息（token）
        return config;
    },err=>{

    })
    // 拦截响应
    axios.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        console.log(err)
    })

    //3、 create函数本身就被promise包装了，所以直接返回就可以了
    return instance(config)
   
}
