<template>
  <div :style="{background:'#f4f4f4'}" class="contanier">
    <Header>
      <div slot="left" class="left"><p>购物车</p></div>
      <div slot="right" class="right"><p>领券</p></div>
    </Header>
    <div class="span">
      <div class="spanItem">
        <span class="iconfont icon-yuanquanweixuanfuben"></span>
        <p>30天无忧退货</p>
      </div>
      <div class="spanItem">
        <span class="iconfont icon-yuanquanweixuanfuben"></span>
        <p>48小时无忧退款</p>
      </div>
      <div class="spanItem">
        <span class="iconfont icon-yuanquanweixuanfuben"></span>
        <p>满88元免邮费</p>
      </div>
    </div>
    <img class="kong" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
    <div class="add-loginBtn">
      <span class="goto-add">去添加点什么吧</span>
      <div class="login-btn" @click="$router.push('/personal/login')">
        <a href="javascript:void(0)">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  export default {
    components:{
      Header,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .contanier
    Header
      .left
        box-sizing border-box
        padding 15px
        width 80%
        font-size 36px
        color #333
      .right
        text-align center
        box-sizing border-box
        width 20%
        font-size 30px
        color #b4282d
    .span
      margin-top 96px
      display flex
      box-sizing border-box
      padding 30px
      justify-content space-between
      .spanItem
        display flex
        vertical-align middle
        span
          font-size 24px
          transform scale(0.5)
        p
          font-size 24px
          color #666
    .kong
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 248px
      height 248px
    .add-loginBtn
      position absolute
      left 50%
      bottom 380px
      transform translateX(-50%)
      text-align center
      .goto-add
        display block
        font-size 28px
        color #999
        margin-bottom 50px
      .login-btn
        width 480px
        height 92px
        margin 0 135px
        text-align center
        line-height 92px
        background-color #b4282d
        a
          font-size 30px
          color #fff
</style>
