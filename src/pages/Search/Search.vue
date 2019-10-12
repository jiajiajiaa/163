<template>
  <div class="contanier">
    <Header class="header">
      <div class="search" v-if="hotsearch.defaultKeyword">
        <i class="iconfont icon-weimingmingwenjianjia_sousuo"></i>
        <input type="text" :placeholder="hotsearch.defaultKeyword.keyword" v-model="searchKey">
      </div>
      <span class="cancle" @click="$router.back()">取消</span>
    </Header>
    <ul class="searchkeylist">
      <li v-for="(i,index) in searchKeyList" :key="index" v-show="searchKey">{{i}}</li>
    </ul>
    <p class="title" v-show="!searchKey">热门搜索</p>
    <ul v-if="hotsearch.defaultKeywords" v-show="!searchKey" class="hotsearchlist">
      <li v-for="(item,index) in hotsearch.hotKeywordVOList" :key="index">
        <a :href="item.schemeUrl" :class="{highlight:item.highlight===1}">{{item.keyword}}</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        searchKey:''
      }
    },
    watch:{
      searchKey(){
        if(this.timeid){
          return
        }
        this.timeid = setTimeout(async () => {
          this.timeid = null
          await this.$store.dispatch('getSearchResult',this.searchKey)
        }, 1000);
      }
    },
    computed:{
      ...mapState({
        hotsearch: state => state.search.hotsearch,
        searchKeyList: state => state.search.searchKeyList,
      }),
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .contanier
    background #f2f5f4
    height 100%
    .header
      display flex
      padding 20px 40px
      background #fff
      .search
        position relative
        width 85%
        i
          position absolute
          left 20px
          top 14px
          font-size 40px
        input
          font-size 30px
          width 100%
          box-sizing border-box
          padding-left 70px
          height 70px
          border none
          background rgba(0,0,0,.1)
          border-radius 10px
      .cancle
        display inline-block
        height 70px
        line-height 70px
        margin-left 20px
        width 15%
        font-size 32px
        text-align center
    .searchkeylist
      padding 0 40px
      background #fff
      overflow hidden
      li
        height 60px
        line-height 60px
        font-size 28px
        margin-top 20px
        border-bottom 1px solid rgba(0,0,0,.1)
    .title
      font-size 26px
      color #999
      padding 20px 40px
      background #fff
    .hotsearchlist
      padding 20px 40px
      background #fff
      clearFix()
      li
        float left
        height 48px
        line-height 48px
        margin 0 32px 32px 0
        a
          display inline-block
          border 1px solid #999
          font-size 24px
          color #333
          padding 0 15px
          &.highlight
            border 1px solid $red
            color $red
</style>