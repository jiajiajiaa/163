<template>
  <div class="footer_box">
    <ul class="footerList">
      <li class="footerItem" :class="{on: '/home'===$route.path}" @click="goto('/home')">
          <span class="iconfont icon-shouye" :class="{on: '/home'===$route.path}"></span>
          <span>首页</span>
      </li>
      <li class="footerItem" :class="{on: '/category/categorylist'===$route.path}" @click="goto('/category/categorylist')">
          <span class="iconfont icon-icon" :class="{on: '/category/categorylist'===$route.path}"></span>
          <span>分类</span>
      </li>
      <li class="footerItem" :class="{on: '/things/find/firstview'===$route.path}" @click="goto('/things/find/firstview')">
          <span class="iconfont icon-faxian" :class="{on: '/things/find/firstview'===$route.path}"></span>
          <span>识物</span>
      </li>
      <li class="footerItem" :class="{on: '/shopcar'===$route.path}" @click="goto('/shopcar')">
          <span class="iconfont icon-gouwuche2" :class="{on: '/shopcar'===$route.path}"></span>
          <span>购物车</span>
      </li>
      <li class="footerItem" :class="{on: '/personal/login'===$route.path}" @click="goto('/personal')">
          <span class="iconfont icon-tubiaozhizuomoban" :class="{on: '/personal/login'===$route.path}"></span>
          <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto (path) {
        console.log('goto()', this.$route.path)
        if (this.$route.path!==path) {
          this.$router.replace(path)
        } else { // 如果请求的时当前的, 直接强制刷新
          window.location.reload()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_box
    position fixed
    bottom 0
    left 0
    width 100%
    height 100px
    background #fff
    .footerList
      width 100%
      height 100%
      display flex
      align-items center
      .footerItem
        width 25%
        height 100%
        display flex
        flex-direction column
        justify-content center
        text-align center
        font-size 24px
      .on
        color $red !important
        .iconfont
          color #333
          font-size 36px
</style>