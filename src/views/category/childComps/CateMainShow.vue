<template>
  <div class="mainshow">
    <CateMainitem v-for="item in mainitemlist" :mainitem="item">{{item}}</CateMainitem>
  </div>
</template>

<script>
import CateMainitem from "@/views/category/childComps/CateMainitem";

export default {
  name: "CateMainShow",
  data(){
    return{

    }
  },
  props:{
    mainitemlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CateMainitem,
  },
}
</script>

<style scoped>
  .mainshow{
    height: 100%;
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
</style>
