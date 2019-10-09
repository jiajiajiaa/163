<template>
  <section class="nav-container" >
    <ul class="nav-box" v-if="navList.kingKongModule">
      <li class="nav-item" v-for="(nav, index) in navList.kingKongModule.kingKongList" :key="index">
        <img :src="nav.picUrl" alt="导航列表">
        <span>{{nav.text}}</span>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        navList: state => state.home.homeData
      }),
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .nav-container
    background-color #F4F4F4
    .nav-box
      clearFix()
      text-align center
      .nav-item
        float left
        width 110px
        height 156px
        margin 10px 20px 9px
        img
          height 110px
          margin-bottom 10px
        span
          font-size 24px
          height 36px
          margin-top 10px
</style>