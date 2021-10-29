<template>
  <div>
    <NavBar>
      <div slot="center" class="center">
        <div v-for="(item,index) in title" class="centeritem" :class="{active:currentindex===index}" @click="changeindex(index)">
          {{item}}
        </div>
      </div>
      <div slot="left" @click="goback">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  components:{
    NavBar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentindex:0
    }
  },
  methods:{
    changeindex(index){
      this.currentindex=index

      this.$emit('clickitem',index)
    },
    goback(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 13px;
  }
  .centeritem{
    flex: 1;
  }
  .active{
    color:var(--color-high-text)
  }
  img{
    margin-top: 10px;
  }
</style>
