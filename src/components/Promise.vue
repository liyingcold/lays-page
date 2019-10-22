<!--  -->
<template>
    <div>
        <br>
        <button @click="promise()" >我是promise，只有一个请求</button>
        <button @click="promiseAll()" >我是promise，有多个请求</button>
    </div>
</template>

<script>

export default{
    data() {
        return {
            
        }
        
    },
    methods: {
        promise(){
            //    new->构造函数（1、保存了一些状态信息 2、执行传入的函数）
            // 在执行传入的回调函数时，会传入两个参数，resolve，reject，本身又是函数
            new Promise((resolve,reject)=>{
                setTimeout(() => {
                   resolve('one');
                //    reject('first');
                }, 1000);
            }).then(res=>{
                console.log(res,'=>成功返回的数据');
            }).catch(err=>{
                console.log(err,'=>失败返回的数据');
            })



            /*new Promise((resolve,reject)=>{
            //    第一次网络请求代码
                setTimeout(()=>{
                    resolve()
                },1000)
            }).then(()=>{
                //    第一次拿到结果的处理代码
                console.log("promise");
                console.log("promise");

            // 
                return new Promise((resolve,reject)=>{
                    //    第二次网络请求
                    setTimeout(()=>{
                        resolve()
                    },1000)
                })
            }).then(()=>{
                //    第二次处理代码
                console.log("hello vue")
                return new Promise((resolve,reject)=>{
                    //    第三次网络请求
                    setTimeout(()=>{
                        resolve()
                    },1000)
                })
            }).then(()=>{
                //    第三次请求结果处理代码
                console.log("第三次请求结果处理代码")
            })*/


        },
        promiseAll(){
            // all方法可接收迭代对象，数组(他可以帮你判断是否请求均成功)
            Promise.all([
                // new Promise((resolve,reject)=>{
                //     $.ajax({
                //         url:'',
                //         success:function(data){
                //             resolve(data)
                //         }
                //     })
                // }),
                // new Promise((resolve,reject)=>{
                //     $.ajax({
                //         url:'',
                //         success:function(data){
                //             resolve(data)
                //         }
                //     })
                // })

                // 模拟数据请求
                new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        resolve('result1')
                    }, 1000);
                }),

                new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        resolve('result2')
                    }, 2000);
                })
               
            ]).then(results=>{
                // results[0]
                // results[1]
                console.log(results)
            })
        }
    },
 

}
  
</script>

<style scoped>
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