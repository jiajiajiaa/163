<template>
  <div>
    <div class="data" v-for="(item,index) in recommendData" :key="index">
      <div v-for="(i.index) in item.topics" :key="index">
        <div class="user">
          <img v-lazy="i.avatar">
          <span>{{i.nickname}}</span>
        </div>
        <div class="title"><span>{{i.title}}</span></div>
        <img v-lazy="i.picUrl" class="bigImage">
        <div class="detail">
          <span class="iconfont icon-kanguo"></span>
          <p>{{i.readCount}}人看过</p>
        </div>
      </div>
      <div v-for="(item,index) in xxx">
        <div v-for="(item2,index) in item.topics">
          <ul v-if="item2.type === 0">
            <li>{{item2.title}}</li>
          </ul>
          <ul v-if="item2.type === 1">
            <li></li>
          </ul>
          <ul v-if="item2.type === 2">
            <li></li>
          </ul>
        </div>
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
