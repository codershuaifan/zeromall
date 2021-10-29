<template>
  <div class="catedetail">
    <CateDetailItem v-for="item in goodslist" :goodsitem="item"></CateDetailItem>
  </div>
</template>

<script>
import CateDetailItem from "@/views/category/childComps/CateDetailItem";

export default {
  name: "CateDetail",
  components:{
    CateDetailItem
  },
  props:{
    goodslist:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .catedetail{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 255px;
    margin-top: 30px;
  }
</style>
