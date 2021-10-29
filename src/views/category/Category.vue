<template>
  <div class="category">
    <nav-bar class="catenav"><div slot="center">商品分类</div></nav-bar>
    <CateShowList :catelist="catelist" @listclick="listclick"></CateShowList>
    <Srcoll class="mainshowscroll" ref="scroll">
      <CateMainShow :mainitemlist="mainshowlist"></CateMainShow>
      <TabControl :message="showarray" class="catetab"></TabControl>
      <CateDetail :goodslist="goodslist"></CateDetail>
    </Srcoll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import Srcoll from "@/components/common/scroll/Srcoll";

import CateShowList from "@/views/category/childComps/CateShowList";
import CateMainShow from "@/views/category/childComps/CateMainShow";
import CateDetail from "@/views/category/childComps/CateDetail";

import {getcategory,getSubcategory,getCategoryDetail} from "@/network/category";

export default {
  name: "Category",
  data(){
    return{
      catelist:[],
      mainshowlist:[],
      showarray:['综合','新品','销量'],
      goodslist:[]
    }
  },
  created() {
    getcategory().then(res=>{
      this.catelist=res.data.category.list
    })

    this.$bus.$on('watchitem',(load)=>{
      this.mainshowlist=load
    })

    this.$bus.$on('watchdetail',(load)=>{
      this.goodslist=load
    })
  },
  components:{
    NavBar,
    TabControl,
    Srcoll,

    CateShowList,
    CateMainShow,
    CateDetail
  },
  methods:{
    listclick(index) {
      getSubcategory(this.catelist[index].maitKey).then(res=>{
        this.mainshowlist=res.data.list
      })
      getCategoryDetail(this.catelist[index].miniWallkey,'pop').then(res=>{
        this.goodslist=res
      })
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .category{
    height: 100vh;
  }
  .catenav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .mainshowscroll{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
    width: 255px;
    position: fixed;
    right: 0;
    top: 44px;
  }
  .catetab{
    width: 255px;
    margin: 15px auto;
    height: 30px;
    border-top: 6px solid #ffe817;
    padding-top: 15px;
  }
</style>
