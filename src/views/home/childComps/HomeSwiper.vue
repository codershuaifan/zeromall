<template>
  <swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperload">
      </a>
    </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data(){
    return{
      isload:true
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    swiperload(){
      if(this.isload)
      {this.$emit('swiperload')
      this.isload=!this.isload}
    }
  }
}
</script>

<style scoped>

</style>
