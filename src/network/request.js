/*封装多个实例的请求 */
import axios from 'axios'


export function request(config,success,failure) {
    // 创建实例
    const instance=axios.create({
        baseURL:'https://free-api.heweather.net/s6',
        timeout:'5000'
    })
    // 发送真正的网络请求
    instance(config)
    // 将结果和异常回调出去，在这里处理不合适（传入两个回调函数
    .then(res=>{
        // console.log(res);
        success(res);
    })
    .catch(err=>{
        // console.log(err);
        failure(err);
    })
}