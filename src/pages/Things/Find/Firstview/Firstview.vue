<template>
  <div>
    <div class="data" v-for="(item,index) in recommendData" :key="index">
      <div class="user">
        <img v-lazy="item.avatar">
        <span>{{item.nickname}}</span>
      </div>
      <div class="title"><span>{{item.title}}</span></div>
      <img v-lazy="item.picUrl" class="bigImage">
      <div class="detail">
        <span class="iconfont icon-kanguo"></span>
        <p>{{item.readCount}}人看过</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        recommendData:state => state.things.recommendData
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .data
    margin-top 20px
    background #fff
    box-sizing border-box
    padding 30px 30px
    .user
      display flex
      img
        width 50px
        height 50px
        border-radius 50%
        margin-right 10px
      span
        font-size 24px
        text-align center
        height 50px
        line-height 50px
    .title
      font-size 40px
    .bigImage
      width 690px
      height 376px
      margin 10px auto
    .detail
      display flex
      box-sizing border-box
      padding-left 10px
      font-size 24px
      color: #999
      span
        margin-right 10px
</style>
