<template>
  <div class="showlist">
    <Srcoll class="scroll">
      <div v-for="(item,index) in catelist"
           class="item" :class="{active:index===currentindex}" @click="listclick(index)">{{item.title}}</div>
    </Srcoll>
  </div>
</template>

<script>
import Srcoll from "@/components/common/scroll/Srcoll";

import {getSubcategory,getCategoryDetail} from "@/network/category";

export default {
  name: "CateShowList",
  data(){
    return{
      currentindex:0,
    }
  },
  props:{
    catelist:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Srcoll
  },
  methods:{
    listclick(index){
      this.currentindex=index
      this.$emit('listclick',this.currentindex)
    }
  },
  watch:{
    catelist(){
      getSubcategory(this.catelist[this.currentindex].maitKey).then(res=>{
        this.$bus.$emit('watchitem',res.data.list)
      })
      getCategoryDetail(this.catelist[this.currentindex].miniWallkey,'pop').then(res=>{
        this.$bus.$emit('watchdetail',res)
      })
    }
  }
}
</script>

<style scoped>
  .showlist{
    width: 120px;
    background-color: #eeeeee;
    height: calc(100% - 44px - 49px);
    font-size: 16px;
  }
  .scroll{
    height: 100%;
    overflow: hidden;
  }
  .item{
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
  .active{
    background-color: #ffffff;
    border-left: 3px solid coral;
    color: var(--color-tint);
  }
</style>
