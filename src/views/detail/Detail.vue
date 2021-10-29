<template>
  <div class="detail">
    <DetailNav class="detail-nav" @clickitem="clickitem" ref="nav"></DetailNav>
    <scroll class="detail-scroll" ref="srcoll" @positionscroll="positionscroll" :probe-type="3">
      <DetailSwiper :imageswiper="image"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :param-info="paramInfo" ref="param"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <GoodsList :goodslist="recommends" ref="goods"></GoodsList>
    </scroll>
    <BackTop @click.native="backtop" v-show="isshowback"></BackTop>
    <DetailBottomBar @joinshop="joinshop"></DetailBottomBar>
  </div>
</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Srcoll";
import GoodsList from "@/components/content/goods/GoodsList";

import {getdetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {listenmixin,mixbacktop} from "@/common/mixin";
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  data(){
    return {
      iid:null,
      image:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      ItemImgListener:null,
      navclick:[],
      currentindex:0,
    }
  },
  created() {
    this.iid=this.$route.params.iid

    getdetail(this.$route.params.iid).then(res=>{
      const data=res.result
      this.image=res.result.itemInfo.topImages
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop=new Shop(data.shopInfo)
      this.detailInfo=data.detailInfo
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

      if(data.rate.cRate !== 0){
        this.commentInfo=data.rate.list[0]
      }
    })

    getRecommend().then(res=>{
      this.recommends=res.data.list
    })
  },
  methods:{
    ...mapActions(['acaddshop']),
    imageLoad(){
      this.$refs.srcoll.refresh()

      this.navclick=[]
      this.navclick.push(0)
      this.navclick.push(this.$refs.param.$el.offsetTop-50)
      this.navclick.push(this.$refs.comment.$el.offsetTop-50)
      this.navclick.push(this.$refs.goods.$el.offsetTop-49)
      this.navclick.push(Number.MAX_VALUE)
    },
    clickitem(index){
      this.$refs.srcoll.scroll.scrollTo(0,-this.navclick[index],500)
    },
    positionscroll(position){
      const positionY=-position.y

      for(let i=0;i<this.navclick.length;i++){
        if((this.currentindex !== i) && (positionY>=this.navclick[i] && positionY <this.navclick[i+1])){
          this.currentindex=i
          this.$refs.nav.currentindex=this.currentindex
        }
      }
      this.mixshowback(position)
    },
    joinshop(){
      const product={}
      product.image=this.image[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid

      this.acaddshop(product).then(res=>{
        this.$toast.show(res,2000)
      })
    }
  },
  mixins:[listenmixin,mixbacktop],
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    Scroll,
    GoodsList
  },
  destroyed() {
    this.$bus.$off('imgload',this.ItemImgListener)
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-scroll{
    height: calc(100% - 44px - 58px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
</style>
