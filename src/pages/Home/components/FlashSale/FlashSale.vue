<template>
  <section class="time-container">
    <div class="time-header">
      <div class="header-top">
        <span>限时购</span>
        <div class="time-down">
          <span>{{hour < 10 ? '0'+hour : hour}}</span>
          <span>:</span>
          <span>{{minute < 10 ? '0'+minute : minute}}</span>
          <span>:</span>
          <span>{{second < 10 ? '0'+second : second}}</span>
        </div>
      </div>
      <span class="header-bottom">
        更多 >
      </span>
    </div>
    <ul class="time-list" v-if="flashSale.flashSaleModule">
      <li v-for="(item, index) in flashSale.flashSaleModule.itemList" :key="index">
        <img v-lazy="item.picUrl" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥{{item.activityPrice}}</span>
          <span class="old-price">￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    data(){
      return{
        hour: 2,
        minute: 59,
        second: 59
      }
    },
    computed:{
      ...mapState({
        flashSale:state=>state.home.homeData
      })
    },
    mounted(){
      this.timeDown()
    },
    methods:{
      timeDown(){
        this.intervalId = setInterval(() => {
          if(this.second > 0){
            this.second--
          }else{
            //秒数小于等于0进
            if(this.minute > 0){
              this.second = 59
              this.minute--
            }else if(this.hour > 0){
              this.minute = 59
              this.second = 59
              this.hour--
            }else{
              clearInterval(this.intervalId);
            }
          }
        }, 1000);
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalId);
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl";
  .time-container
    background #fff
    margin-top 15px
    .time-header
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .header-top
        display flex
        .time-down
          span
            font-size 24px
            &:nth-of-type(odd)
              padding 5px
              color #fff
              background-color #000
              border-radius 5px
              margin 0 10px
            &:nth-of-type(even)
              height 36px
      .header-bottom
        i
          width 30px
          height 30px
          font-size 30px
    .time-list
      clearFix()
      padding 0 10px 0 30px
      li
        float left
        width 216px
        height 270px
        margin-right 20px
        padding-bottom 30px
        img
          width 216px
          height 216px
          background-color #f5f5f5
        .good-price
          height 40px
          line-height 40px
          padding 0 0 0 10px
          margin-top 10px
          .new-price
            font-size 28px
            color $red
          .old-price
            font-size 24px
            color #777
            text-decoration line-through
</style>