<template>
  <div class="catemainitem">
    <a :href="mainitem.link">
      <img :src="mainitem.image">
      <div>{{mainitem.title}}</div>
    </a>
  </div>
</template>

<script>
import {getSubcategory} from "@/network/category";

export default {
  name: "CateMainitem",
  props:{
    mainitem:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
  .catemainitem{
    width: 50%;
    text-align: center;
  }
  img{
    width: 100px;
  }
</style>
