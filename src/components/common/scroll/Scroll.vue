<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
        <slot>

        </slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props:{
           probeType:{
               type:Number,
               default:0
           },
            pullUpLoad: {
                    type:Boolean,
                   default: false
                }
        },

        data(){
         return{
             scroll:null
         }
        },
        methods:{
          scrollTo(x,y,time=300){//书写方式2,time可这样设定默认值
               this.scroll.scrollTo(x,y,time)
          },
            finishPullUp(){
              this.scroll.finishPullUp()
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wrapper,{
               click:true,//在此处设置可以使scroll内的组件可以点击,button什么时候都能点击
                probeType: this.probeType,
                pullUpLoad:this.pullUpLoad
        })
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
            this.scroll.on('pullingUp',()=>{
                // console.log('上拉加载更多');
                this.$emit('pullingUp')
            })
        },

    }
</script>

<style scoped>

</style>