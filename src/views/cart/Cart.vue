<template>
  <div class="cart">
    <NavBar class="navcart">
      <div slot="center">购物车({{cartlistlength}})</div>
    </NavBar>
    <CartList></CartList>
    <Total></Total>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import { mapGetters } from 'vuex'

import CartList from "@/views/cart/childComps/CartList";
import Total from "@/views/cart/childComps/Total";

  export default {
    name: "Cart",
    data(){
      return{
        number:100
      }
    },
    components:{
      NavBar,
      CartList,
      Total
    },
    computed:{
      ...mapGetters([
        "cartlistlength",
      ])
    },
  }
</script>

<style scoped>
  .navcart{
    background-color: var(--color-tint);
    color:#ffffff;
  }
  .cart{
    height: 100vh;
  }
</style>
