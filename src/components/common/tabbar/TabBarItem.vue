<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
<!--     :class="{isActive}"-->
   </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
          path:String,//接收路径（需要复习一下）获取点击item后发送的路径
        activeColor:{
            type:String,
            default:'red'
        }
      },

      data(){
          return {
            //isActive:false
          }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path).catch(err=>err)//vue-router版本问题，3.0以上需要捕获异常
        }
      },
      computed:{
          isActive(){//比较4次
            // console.log(this.$route.path)//当前显示页面的路径
            // console.log('------------')
            // console.log(this.path)//当前item的路径
            // console.log('!!!!!!!!!!!!!!!!')
            return this.$route.path.indexOf(this.path)!=-1
          },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    /*均分*/
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  .active{
    color:red;
  }
</style>
