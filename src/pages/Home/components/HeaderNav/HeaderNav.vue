<template>
  <div class="header_nav">
    <div class="left_ul_box">
      <ul class="left_ul clearfix" @click="addActive($event)">
        <li><a :class="{active: curA===0}" data-this-index="0" href="javascript:">推荐</a></li>
        <li><a :class="{active: curA===1}" data-this-index="1" href="javascript:">居家生活</a></li>
        <li><a :class="{active: curA===2}" data-this-index="2" href="javascript:">服饰鞋包</a></li>
        <li><a :class="{active: curA===3}" data-this-index="3" href="javascript:">美食酒水</a></li>
        <li><a :class="{active: curA===4}" data-this-index="4" href="javascript:">个户清洁</a></li>
        <li><a :class="{active: curA===5}" data-this-index="5" href="javascript:">母婴亲子</a></li>
        <li><a :class="{active: curA===6}" data-this-index="6" href="javascript:">运动旅行</a></li>
        <li><a :class="{active: curA===7}" data-this-index="7" href="javascript:">数码家电</a></li>
        <li><a :class="{active: curA===8}" data-this-index="8" href="javascript:">礼品特色</a></li>
      </ul>
    </div>
    <div class="right_span">
      <span class="linear"></span>
      <div class="img_box">
        <img :class="{is_open: isOpen}" @click="isOpen=!isOpen" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开"/>
      </div>
    </div>
    <div class="all_nav_box" v-show="isOpen">
      <p>全部频道</p>
      <ul class="all_nav clearfix" @click="addActive1($event)">
        <li :class="{active: curA===0}"><a href="javascript:" data-this-index="0">推荐</a></li>
        <li :class="{active: curA===1}"><a href="javascript:" data-this-index="1">居家生活</a></li>
        <li :class="{active: curA===2}"><a href="javascript:" data-this-index="2">服饰鞋包</a></li>
        <li :class="{active: curA===3}"><a href="javascript:" data-this-index="3">美食酒水</a></li>
        <li :class="{active: curA===4}"><a href="javascript:" data-this-index="4">个户清洁</a></li>
        <li :class="{active: curA===5}"><a href="javascript:" data-this-index="5">母婴亲子</a></li>
        <li :class="{active: curA===6}"><a href="javascript:" data-this-index="6">运动旅行</a></li>
        <li :class="{active: curA===7}"><a href="javascript:" data-this-index="7">数码家电</a></li>
        <li :class="{active: curA===8}"><a href="javascript:" data-this-index="8">礼品特色</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isOpen:false,
        curA:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(".left_ul_box", {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    methods:{
      goto (path) {
        if (this.$route.path!==path) {
          this.$router.replace(path)
        } else { // 如果请求的时当前的, 直接强制刷新
          window.location.reload()
        }
      },
      addActive (e) {
        this.curA = +e.target.dataset.thisIndex
      },
      addActive1 (e) {
        this.curA = +e.target.dataset.thisIndex
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .header_nav
    width 100%
    height: 75px;
    position relative
    z-index 2
    margin-top 75px
    background #fff
    .left_ul_box
      width 100%
      height 100%
      overflow hidden
      >.left_ul
        float left
        padding-right 150px
        display flex
        height 100%
        >li
          display flex
          justify-content center
          align-items center
          box-sizing border-box
          padding 0 16px
          text-align center
          color #333
          font-size 26px
          line-height 60px
          width 150px
          margin-bottom 4px
          a
            box-sizing border-box
            height 100%
            line-height 80px
            &.active
              min-width 90px
              color $themeColor
              border-bottom 4px solid $themeColor
    .right_span
      display flex
      flex-grow 0
      align-items center
      justify-content center
      position absolute
      top 4px
      right 0
      z-index 2
      .linear
        width 6px
        height 6px
        background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
      .img_box
        width 100px
        height 60px
        text-align center
        background #fff
        display: flex;
        justify-content: center;
        align-items: center;
        >img
          width 28px
          height 28px
          transition transform 300ms linear
          &.is_open 
            transform rotateZ(180deg)
    .all_nav_box
      position absolute
      top 0
      left 0
      width 100%
      background-color #fff
      >p
        height: 60px;
        padding-left: 30px;
        font-size: 28px;
        display flex
        align-items center
      .all_nav
        display flex
        flex-wrap wrap
        justify-content flex-start
        padding-left 15px
        li
          width 165px
          margin 7.5px
          padding 0 16px
          box-sizing border-box
          font-size 20px
          line-height 60px
          color #333
          background-color: #fafafa
          border 2px solid $borderBgc
          border-radius 8px
          display flex
          align-items center
          justify-content center
          &.active
            color $themeColor
            border 2px solid $themeColor 
</style>