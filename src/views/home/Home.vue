<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <TabControl :message="showmessage" class="tab" @controlclick="conclick" ref="tabref1" v-show="isshowtab"></TabControl>
    <srcoll class="content" ref="srcoll" :probeType="3" @positionscroll="showposition" :pull-up-load="true" @pullup="pullup">
      <HomeSwiper :banners="banners" @swiperload="swiperload"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :message="showmessage" class="tab" @controlclick="conclick" ref="tabref2"></TabControl>
      <GoodsList :goodslist="goodsclick" ></GoodsList>
    </srcoll>
    <BackTop @click.native="backtop" v-show="isshowback"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import srcoll from "@/components/common/scroll/Srcoll";

import {getHomeMultidata,getHomeGoods} from "network/home";
import {listenmixin,mixbacktop} from "@/common/mixin";

export default {
  name: "Home",
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    srcoll,
  },
  data(){
    return{
      banners:[],
      recommends:[],
      showmessage:['流行','新款','精选'],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      },
      currentlist:'pop',
      taboffset:0,
      isshowtab:false,
      nowlocation:0,
      ItemImgListener:null
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')

    this.getHomeGoods('sell')

    this.getHomeGoods('new')
  },
  mounted() {
  },
  mixins:[listenmixin,mixbacktop],
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1

        this.$refs.srcoll.scroll.finishPullUp()
      })
    },
    conclick(index){
      switch (index){
        case 0:this.currentlist='pop';break;
        case 1:this.currentlist='new';break;
        case 2:this.currentlist='sell';break;
      }

      this.$refs.tabref1.currentindex=index
      this.$refs.tabref2.currentindex=index
    },
    showposition(position){
      this.mixshowback(position)
      this.isshowtab=position.y<(-this.taboffset+1)
    },
    pullup(){
      this.getHomeGoods(this.currentlist)
    },
    swiperload() {
      this.taboffset=this.$refs.tabref2.$el.offsetTop
    }
  },
  computed:{
    goodsclick(){
      return this.goods[this.currentlist].list
    },
  },
  activated(){
    this.$refs.srcoll.refresh()
    this.$refs.srcoll.scroll.scrollTo(0,this.nowlocation,0)
  },
  deactivated(){
    this.nowlocation=this.$refs.srcoll.scroll.y

    this.$bus.$off('imgload',this.ItemImgListener)
    // console.log(this.nowlocation);
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 10;
  }
  .tab{
    position: relative;
    line-height: 44px;
    z-index: 10;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
