<template>
  <div>
    <img src="~assets/img/cart/tick.svg" alt="" class="imgone" :class="{active:isshow}">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isshow:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  .imgone{
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: #ffffff;
  }
  .active{
    background-color: red;
    border-color: red;
  }
</style>
