<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
        components: {GoodsListItem},
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    /*flex-wrap：wrap ；*/

    /*弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。*/
    justify-content:space-around ;
    /*均等分*/
}
</style>