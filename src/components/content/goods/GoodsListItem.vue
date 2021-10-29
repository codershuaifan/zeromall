<template>
  <div class="ggoodsitem" @click="tiaozhuan">
    <img :src="goodsitemimage" alt="" @load="imgload">
    <div>
      <p>{{goodsitem.title}}</p>
      <span style="color: var(--color-tint)">{{goodsitem.price}}</span>
      <span><img src="~assets/img/common/collect.svg" alt=""></span>
      <span>{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgload(){
      this.$bus.$emit('imgload')
    },
    tiaozhuan(){
      this.$router.push('/detail/'+this.goodsitem.iid)
    }
  },
  computed:{
    goodsitemimage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style scoped>
  .ggoodsitem>img{
    border-radius: 5px;
    width: 100%;
    height: 80%;
  }
  .ggoodsitem p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width:154px;
  }
  .ggoodsitem{
    font-size: 8px;
    position: relative;
  }
  .ggoodsitem div{
    position: absolute;
    bottom: 8px;
    left: 15px;
  }
  .ggoodsitem span{
    position: relative;
    left: 25%;
  }
  span img{
    width: 12%;
    position: relative;
    top:1px;
    padding-left: 3px;
    padding-right: 3px;
  }
</style>
