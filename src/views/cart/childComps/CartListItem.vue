<template>
  <div class="cartlistitem">
    <div class="onlyimage">
      <CheckButton class="cartbutton" @click.native="clickbutton" :isshow="cartitem.check"></CheckButton>
      <img :src="cartitem.image" alt="" class="imgtwo">
    </div>
    <div class="seconddiv">
      <div class="title">{{cartitem.title}}</div>
      <div class="desc">{{cartitem.desc}}</div>
      <div class="price">
        <div class="priceone">￥{{cartitem.price}}</div>
        <div class="pricetwo">x{{cartitem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkbutton/CheckButton";

export default {
  name: "CartListItem",
  props:{
    cartitem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    clickbutton(){
      this.cartitem.check=!this.cartitem.check
    }
  }
}
</script>

<style scoped>
  .cartlistitem{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #a3a3a5;
    display: flex;
  }
  .onlyimage{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
  .imgtwo{
    height: 85%;
    width: 80px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .title{
    font-size: 15px;
  }
  .desc{
    font-size: 11px;
    color:#999999;
    margin-left: 2px;
  }
  .title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex:1
  }
  .price{
    display: flex;
    flex: 1;
    margin-left: -4px;
  }
  .seconddiv{
    height: 120px;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    padding-top: 8px;
    margin-left: 10px;
  }
  .priceone{
    color: orange;
  }
  .pricetwo{
    position: fixed;
    right: 10px;
    font-weight: bold;
  }
</style>
