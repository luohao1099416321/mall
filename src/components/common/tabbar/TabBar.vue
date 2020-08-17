<template>
  <div id="tab-bar">
    <slot></slot>
<!--    预留插槽，实现在APP。vue中实现-->
<!--    <div class="tab-bar-item"><img src="../../assets/img/tabbar/home.svg"><div>首页</div></div>-->
<!--    <div class="tab-bar-item"><img src="../../assets/img/tabbar/category.svg"><div>分类</div></div>-->
<!--    <div class="tab-bar-item"><img src="../../assets/img/tabbar/cart.svg"><div>购物车</div></div>-->
<!--    <div class="tab-bar-item"><img src="../../assets/img/tabbar/mine.svg"><div>我的</div></div>-->
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    /*水平布局*/
    background-color: #f6f6f6;
    position: fixed;
    /*/相对于窗口绝对定位*/
    left: 0;
    /*距离左侧0px*/
    right: 0;
    /*距离右侧0px*/
    bottom: 0;
    /*距离底部0px*/
    box-shadow: 0 -1px 1px rgba(100,100,100, .1);
    /*x轴 0  Y轴 -1 模糊程度 1  颜色*/
  }

</style>
