<template>
  <div class="detailitem" @click="tiaozhuan">
    <img :src="goodsitem.img" alt="">
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
  name: "CateDetailItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    tiaozhuan(){
      this.$router.push('/detail/'+this.goodsitem.iid)
    }
  }
}
</script>

<style scoped>
  .detailitem{
    width: 45%;
    text-align: center;
    height: 220px;
    font-size: 8px;
    position: relative;
  }
  .detailitem>img{
    border-radius: 5px;
    width: 100%;
  }
  .detailitem p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width:100px;
    margin-left: 8px;
  }
  .detailitem div{
    position: absolute;
    bottom: 8px;
  }
  span img{
    width: 17%;
    position: relative;
    top:1px;
    padding-left: 3px;
    padding-right: 3px;
  }
</style>
