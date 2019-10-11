<template>
  <section class="products-container">
    <div class="products-header">
      <div class="header-top">
        <span>新品首发</span>
      </div>
      <span class="header-bottom">
        更多 >
      </span>
    </div>
    <ul class="products-list" v-if="homeData.newItemList">
      <li v-for="(item, index) in homeData.newItemList" :key="index">
        <img v-lazy="item.listPicUrl" alt="新品首发">
        <div class="good-name">
          <span>{{item.name}}</span>
          <span class="good-price">￥{{item.counterPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    computed: {
      ...mapState({
        homeData: state => state.home.homeData
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .products-container
    background #fff
    margin-top 15px
    padding-bottom 30px
    .products-header
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .header-top
        display flex
      .header-bottom
        i
          width 30px
          height 30px
          font-size 30px
    .products-list
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
        .good-name
          height 72px
          line-height 35px
          margin-top 10px
          font-size 24px
          .good-price
            color $red
</style>