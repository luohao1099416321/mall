import   axios from 'axios'

//方式一
// export  function request(config,success,failure) {
// // const instance=axios.create({
// //   baseURL:'http://152.136.185.210:8000/api/z8',
// //   timeout:5000
// // })
// //   instance(config).then(res=>{
// //     success(res)
// //   }).catch(err=>{
// //     failure(err)
// //   })
// // }


//方式二
// export  function request(config){
//   const instance=axios.create({
//     baseURL:'http://152.136.185.210:8000/api/z8',
//     timeout:5000
//   })
//   instance(config.baseConfig).then(res=>{config.success(res)})
//     .catch(err=>{config.failure(err)})
// }

//方式三
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     const instance=axios.create({
//       baseURL:'http://152.136.185.210:8000/api/z8',
//       timeout:5000
//     })
//
//     instance(config).then(res=>{resolve(res)})
//       .catch(err=>{reject(err)})
//   })
// }


//终极版
export function request(config){
    const  instance=axios.create({
        baseURL:'http://152.136.185.210:8000/api/z8',
        timeout:5000

    })

//请求拦截
    instance.interceptors.request.use(config=>{//拦截成功
        // console.log(config);//处理代码加在此处
        return config
    },err=>{//拦截失败
        // console.log(err)
    })


    //响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res);
        return res.data
    },err=>{
        // console.log(err);
    })
    //发送网络请求
    return instance(config)//axios自带promise
}
