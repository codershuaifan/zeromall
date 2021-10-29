<template>
  <div class="cartlist">
    <Srcoll ref="scroll" class="cartscroll">
      <CartListItem v-for="item in getcartlist" :cartitem="item"></CartListItem>
    </Srcoll>
  </div>
</template>

<script>
import Srcoll from "@/components/common/scroll/Srcoll";

import { mapGetters } from 'vuex'

import CartListItem from "@/views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  components:{
    Srcoll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed:{
    ...mapGetters([
      "getcartlist"
    ])
  },
}
</script>

<style scoped>
  .cartscroll{
    height: calc(100% - 44px - 49px - 50px);
    overflow: hidden;
  }
  .cartlist{
    height: 100%;
  }
</style>
