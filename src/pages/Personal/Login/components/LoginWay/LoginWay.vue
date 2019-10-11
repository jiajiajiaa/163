<template>
  <div class="loginWay">
    <div class="img">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <div class="loginbtn">
      <div class="phone" @click="checkLoginWay(1)">
        <span class="iconfont icon-shouji"></span>
        <p>手机号码登陆</p>
      </div>
      <div class="email" @click="checkLoginWay(2)">
        <span class="iconfont icon-youxiang1"></span>
        <p>邮箱账号登陆</p>
      </div>
      <div class="zhuce" @click="checkLoginWay(3)">
        <p>手机号快捷注册 ></p>
      </div>
    </div>
    <div class="otherLogin">
      <div class="otherLogin-item">
        <span class="iconfont icon-weixin"></span>
        <p>微信</p>
      </div>
      <div class="otherLogin-item">
        <span class="iconfont icon-qq"></span>
        <p>QQ</p>
      </div>
      <div class="otherLogin-item weibo">
        <span class="iconfont icon-xinlang"></span>
        <p>微博</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props:{
      checkLoginWay:Function
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../../../common/stylus/mixins.styl';
  .loginWay
    .img
      width 100%
      padding-top 200px
      margin-bottom 150px
      img
        height 90px
        width 268px
        margin 0 auto
    .loginbtn
      padding 0 40px 380px 40px
      .phone
        display flex
        height 100px
        line-height 100px
        border-radius 20px
        justify-content center
        background $red
        color #ffffff
        margin-bottom 30px
        span
          font-size 50px
          margin-right 10px
        p
          font-size 28px
      .email
        display flex
        height 100px
        line-height 100px
        border 1px solid $red
        border-radius 20px
        justify-content center
        background #fff
        color $red
        margin-bottom 30px
        span
          margin-right 10px
          font-size 50px
        p
          font-size 28px
      .zhuce
        text-align center
        color #333
        font-size 28px
    .otherLogin
      display flex
      justify-content center
      color #7f7f7f
      .otherLogin-item
        display flex
        border-right 1px solid #7f7f7f
        padding 0 40px
        &.weibo
          border none
        span
          margin-right 10px
        p
          font-size 28px
</style>