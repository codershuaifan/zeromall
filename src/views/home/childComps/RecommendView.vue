<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <h2>{{item.title}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    margin-top: 10px;
    font-size: 8px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend img{
    width: 80%;
  }
  .recommend a{
    flex:1
  }
</style>
