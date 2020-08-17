import {request} from "./request";

export function getHomeMultidata(){//增加一个js，Home.vue直接面向该js,防止request.js代码过多难以管理
    return request({
        url:'/home/multidata'
    })
}


export  function getHomeGoods(type,page){
return request({
    url:'/home/data',
    params:{
        type,
        page
    }
})
}