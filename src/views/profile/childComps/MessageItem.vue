<template>
  <div class="messageitem">
    <div class="firstdiv">
      <slot name="image"></slot>
    </div>
    <div class="seconddiv">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageitem"
}
</script>

<style scoped>
  .messageitem{
    height: 50px;
    width: 100%;
    display: flex;
  }
  .firstdiv{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .firstdiv>img{
    height: 50%;
  }
  .seconddiv{
    width: 90%;
    height: 100%;
    border-bottom: 2px solid #eeeeee;
  }
</style>
