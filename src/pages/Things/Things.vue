<template>
  <div :style="{background:'#f4f4f4'}" class="wrap">
    <Header>
      <div slot="left" class="tohome" @click="$router.push('/home')">
        <span class="iconfont icon-shouye"></span>
      </div>
      <div slot="center" class="mian-header">
        <span :class="{active:'/things/find/firstview'===$route.path}" @click="goto('/things/find')">发现</span>
        <span :class="{active:'/things/expert'===$route.path}" @click="goto('/things/expert')">甄选家</span>
      </div>
      <div slot="right" class="right">
        <span class="iconfont icon-sousuo1" @click="$router.push('/search')"></span>
        <span class="iconfont icon-gouwuche2" @click="$router.push('/shopcar')"></span>
      </div>
    </Header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  export default {
    components:{
      Header
    },
    methods:{
      goto(path){
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
  .wrap
    height 100%
    Header
      .tohome
        width 33%
        margin-top 10px
        background #fff
        span
          font-size 46px
      .mian-header
        width 33%
        margin-top 10px
        font-size 34px
        color #777
        background #fff
        span
          margin-right 20px
          &.active
            color #b4282d
            font-size 42px
            font-weight 700
      .right
        margin-top 10px
        width 33%
        background #fff
        display flex
        justify-content flex-end
        span
          font-size 46px
          margin-right 20px
          color #000
</style>