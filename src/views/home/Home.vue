<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list   :goods="showGoods"/>
</scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
<!--    注意参数传递写法-->
<!--    <swiper>-->
<!--      <swiper-item v-for="item in banners" >-->
<!--<a :href="item.link">-->
<!--  <img :src="item.image">-->
<!--</a>-->

<!--      </swiper-item>-->
<!--    </swiper>-->

  </div>
</template>

<script>

  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

    export default {
        name: "Home",
      components:{

        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
        // Swiper,
        // SwiperItem
      },
      data(){
          return {
          // result:null
            banners:[],
            recommends:[],
            goods:{
             'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}

            },
            currentType:'pop',
              isShowBackTop:false
          }
      },
      created() {
       this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      methods:{
          getHomeMultidata(){
            getHomeMultidata().then(res=>{
              //console.log(res)
              // this.result=res;//保存到data中
              this.banners=res.data.banner.list
              this.recommends=res.data.recommend.list
            })
          },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{//把第一页的都先请求下来
             // console.log(res);
              this.goods[type].list.push(...res.data.list)//数组push
              this.goods[type].page+=1//存完页码加一
                this.$refs.scroll.finishPullUp()//调用此方法告诉better-scroll数据已加载,否则事件只会触发一次
            })
        },
        tabClick(index){
             switch (index) {
                case 0:
                  this.currentType='pop'
                     break;
                case 1:
                  this.currentType='new'
                     break;
                case 2:
                  this.currentType='sell'
                     break;
             }
        },
        backClick(){
          // this.$refs.scroll.scroll.scrollTo(0,0,500)//先拿到叫scroll的组件，再拿到scroll对象，在调用scrollTo方法
          // 也可这么写
          this.$refs.scroll.scrollTo(0,0)
        },
          contentScroll(position){
              if (position.y<-1000){
                  this.isShowBackTop=true
                  //return this.isShowBackTop
              }
              else{
                  this.isShowBackTop=false
              }
          },
          loadMore(){
              this.getHomeGoods(this.currentType)
          }
      },
      computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }

      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
.home-nav{
background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /*覆盖等级*/
  z-index: 9;
}
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom:49px;
    left: 0;
    right: 0;

  }
/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 51px;*/
/*}*/

</style>
