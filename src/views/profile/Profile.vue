<template>
  <div>
    <NavBar class="profilenav"><div slot="center">个人中心</div></NavBar>
    <div class="login">
      <div class="loginfirst">
        <img src="~assets/img/profile/avatar.svg" alt="" id="first">
      </div>
      <div class="loginsecond">
        <div>登录/注册</div>
        <div class="loginthree">
          <img src="~assets/img/profile/phone.svg" id="second">
          <div id="loginfour">暂无绑定手机号</div>
        </div>
      </div>
      <img src="~assets/img/common/arrow-left.svg" alt="" id="three">
    </div>
    <div class="threediv">
      <div class="onediv">
        <div class="both">
          <div>
            0.00
          </div>
          <div>
            元
          </div>
        </div>
        <div>我的余额</div>
      </div>
      <div class="twodiv">
        <div class="both">
          <div>
            0
          </div>
          <div>
            个
          </div>
        </div>
        <div>我的优惠</div>
      </div>
      <div class="thirddiv">
        <div class="both">
          <div>
            0
          </div>
          <div>
            分
          </div>
        </div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="shadow"></div>
    <MessageItem>
      <img src="~assets/img/profile/message.svg" alt="" slot="image">
      <div slot="text" class="text">我的消息</div>
    </MessageItem>
    <MessageItem>
      <img src="~assets/img/profile/pointer.svg" alt="" slot="image">
      <div slot="text" class="text">积分商城</div>
    </MessageItem>
    <MessageItem>
      <img src="~assets/img/profile/vip.svg" alt="" slot="image">
      <div slot="text" class="text">会员卡</div>
    </MessageItem>
    <div class="shadow" id="secondshadow"></div>
    <MessageItem>
      <img src="~assets/img/profile/cart.svg" alt="" slot="image">
      <div slot="text" class="text">我的购物车</div>
    </MessageItem>
    <MessageItem>
      <img src="~assets/img/profile/shopping.svg" alt="" slot="image">
      <div slot="text" class="text">下载购物APP</div>
    </MessageItem>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import MessageItem from "@/views/profile/childComps/MessageItem";

export default {
  name: "Profile",
  components:{
    NavBar,
    MessageItem
  }
}
</script>

<style scoped>
  .profilenav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .login{
    width: 100%;
    background-color: var(--color-tint);
    height: 100px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .loginfirst{
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #first{
    height: 85%;
  }
  .loginsecond{
    height: 100px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #second{
    height: 20px;
  }
  .loginthree{
    height: 20px;
    display: flex;
    margin-top: 5px;
    margin-left: -3px;
  }
  .loginsecond div{
    font-size: 18px;
  }
  #loginfour{
    font-size: 10px;
    margin-top: 4px;
  }
  #three{
    height: 50%;
  }
  .threediv{
    height: 95px;
    width: 100%;
    display: flex;
  }
  .onediv,.twodiv,.thirddiv{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .both{
    display: flex;
    margin-bottom: 15px;
  }
  .both>div{
    color: coral;
    font-size: 25px;
    font-weight: bolder;
  }
  .onediv,.twodiv{
    border-right: 1px solid #eeeeee;
  }
  .shadow{
    width: 100%;
    height: 20px;
    background-color: #eeeeee;
    z-index: 10;
  }
  .text{
    line-height: 50px;
    color: black;
  }
  #secondshadow{
    margin-top: -2px;
    position: relative;
    z-index: 10;
  }
</style>
