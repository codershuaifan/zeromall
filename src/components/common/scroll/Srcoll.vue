<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Srcoll",
  data(){
    return{
      scroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    this.scroll.on('scroll',position=>{
      this.$emit('positionscroll',position)
    })

    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullup')
      })
    }
  },
  methods:{
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
</style>
