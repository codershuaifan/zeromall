<template>
  <div class="ggoodslist">
    <GoodsListItem v-for="item in goodslist" :goodsitem="item" class="goodsitemsty"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props:{
    goodslist:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .ggoodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around ;
  }
  .goodsitemsty{
    width: 48%;
    height:280px;
  }
</style>
