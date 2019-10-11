<template>
  <div class="category-container">
    <div class="category-main">
      <img class="category-bigImg" v-lazy="categories.bannerUrl" alt="居家生活大图" v-if="categories">
      <ul v-if="categories">
        <li v-for="(category, index) in categories.subCateList" :key="index">
          <img v-lazy="category.bannerUrl" :alt="category.name">
          <span>{{category.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default{
    data () {
      return {
        categories: [],
        categoryId: '1022001'
      }
    },
    computed: {
      ...mapState({
        categoryL1List: state => state.categoryList.categoryL1List
      })
    },
    mounted () {
      // this.categoryId = this.$route.query.id ? this.$route.query.id : '1022001'
      new BScroll('.category-container',{
        click:true
      })
      this.categories = this.categoryL1List.find( item => item.id === this.categoryId*1)
    },
    watch: {
      //监视路由path发生变化时更改状态
      $route(){
        this.categoryId = this.$route.query.id
        this.categories = this.categoryL1List.find( item => item.id === this.categoryId*1)
        console.log(1111);
      },
      //监视categoryL1List的数据是否到达
      categoryL1List(){
        this.categories = this.categoryL1List.find( item => item.id === this.categoryId*1)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .category-container
    height 100%
    overflow hidden
    .category-main
      height 100%
      padding 30px 30px 120px
      .category-bigImg
        width 528px
        height 192px
        margin-bottom 30px
      ul
        display flex
        flex-wrap wrap
        width 100%
        li
          text-align center
          width 143px
          margin-right 30px
          img
            width 143px
            height 143px
          span
            font-size 24px
</style>