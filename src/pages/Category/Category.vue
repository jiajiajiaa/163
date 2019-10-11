<template>
  <div class="categoryList-container">
    <Header>
      <div class="header" slot="center">
        <div class="search_box" @click="$router.push('/search')">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
          <span class="placeholder">
            搜索商品，共23333件好物
          </span>
        </div>
      </div>
    </Header>
    <section class="categoryList-main">
      <div class="categoryList-left">
        <ul>
          <li :class="{active:currentId * 1 === category.id}" v-for="(category,index) in caregoryList" :key="index">
            <router-link :to="{path:'categorylist',query:{id:category.id}}">{{category.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  import {mapState} from 'vuex'
  export default {
    components: {Header},
    data () {
      return {
        currentId: ''
      }
    },
    computed:{
      ...mapState({
        caregoryList: state => state.categoryList.categoryL1List
      })
    },
    mounted () {
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001';
    },
    watch: {
      $route () {
        this.currentId = this.$route.query.id;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  .categoryList-container
     height 100%
     box-sizing border-box 
    .header
      width 100%
      padding 20px 40px
      border-bottom 2px solid #eee
      img
        width 138px
        height 40px
        display: inline-block;
        margin-right: 10px;
        background-size: cover;
        background-position: center;
      .search_box
        display flex;
        flex-grow 1
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 56px
        font-size 28px
        background-color #ededed
        border-radius 15px
        color #666
        >img
          display inline-block
          vertical-align: middle
          width 28px
          height 28px
          margin-right 5px
    .categoryList-main
        display flex
        height 100%
        position relative
        padding-top 114px
        box-sizing border-box
      .categoryList-left
        height 100%
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            &.active
              border-left 6px solid $red
              a
                color $red
</style>