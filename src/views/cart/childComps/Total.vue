<template>
  <div class="total">
    <CheckButton class="before" :isshow="isshow" @click.native="abovechoose"></CheckButton>
    <div class="above">全选</div>
    <div class="two">合计:</div>
    <div class="three">￥{{totalprice}}</div>
    <div class="four" @click="pay">去计算({{totalcount}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkbutton/CheckButton";
import { mapGetters } from 'vuex'

export default {
  name: "Total",
  data(){
    return{

    }
  },
  components:{
    CheckButton
  },
  computed:{
    totalprice(){
      return this.getcartlist.filter(item=>{
        return item.check
      }).reduce((preValue,item)=>{
        return preValue+(item.price * item.count)
      },0).toFixed(2)
    },
    totalcount(){
      return this.getcartlist.filter(item=>{
        return item.check
      }).length
    },
    ...mapGetters([
      'getcartlist'
    ]),
    isshow(){
      if(this.getcartlist.length===0){
        return false
      }
      else {
        if(this.getcartlist.find(item=>!item.check)){
          return false
        }
        else return true
      }
    }
  },
  methods:{
    abovechoose(){
      if(this.getcartlist.filter(item=>item.check).length===this.getcartlist.length){
        for(let i in this.getcartlist){
          this.getcartlist[i].check=false
        }
      }
      else {
        for(let i of this.getcartlist){
          if(!i.check){
            i.check=!i.check
          }
        }
      }
    },
    pay(){
      if(this.getcartlist.filter(item=>item.check).length===0){
        this.$toast.show('未选择任何商品',1500)
      }
      else this.$toast.show('结算成功',1500)
    }
  }
}
</script>

<style scoped>
  .total{
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #cccccc;
    position: fixed;
    bottom: 49px;
    align-items: center;
    font-size: 16px;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  }
  .two{
    margin-left: 15px;
  }
  .before{
    margin-left: 16px;
  }
  .three{
    color:orange;
  }
  .four{
    height: 40px;
    line-height: 40px;
    background-color: orangered;
    position: fixed;
    right: 0;
    width: 80px;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
  }
  .above,.two{
    font-weight: bolder;
    color: black;
  }
  .above{
    margin-left: 5px;
  }
</style>
