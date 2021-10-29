<template>
  <Swiper class="detailimage">
    <SwiperItem v-for="item in imageswiper">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import SwiperItem from "@/components/common/swiper/SwiperItem";
import Swiper from "@/components/common/swiper/Swiper";


export default {
  name: "DetailSwiper",
  components: {Swiper,SwiperItem},
  props:{
    imageswiper:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detailimage{
    height: 300px;
    overflow: hidden;
  }
</style>
