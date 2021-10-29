<template>
  <div class="tabcon">
    <div v-for="(item,index) in message" :class="{active:currentindex===index}" @click="tabclick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    message:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentindex:0,
    }
  },
  methods:{
    tabclick(index){
      this.currentindex=index
      this.$emit('controlclick',index)
    },
  }
}
</script>

<style scoped>
  .tabcon{
    display: flex;
    text-align: center;
    background-color: white;
    font-size: 15px;
  }
  .tabcon div{
    flex:1
  }
  .active{
    color:var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    margin-top: 5px;
    padding-bottom: 5px;
  }
</style>
