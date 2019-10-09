<template>
  <section v-if="homeData.categoryModule">
    <div class="classify-container" v-for="(classify, index) in homeData.categoryModule" :key="index">
      <img :src="classify.titlePicUrl" alt="标题图片">
      <div class="classify-list">
        <ul class="ul-node">
          <li v-for="(item ,index) in classify.itemList" :key="index">
            <img :src="item.listPicUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">{{item.name}}</span>
              <span class="good-price">￥{{item.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex';
  export default {
    computed: {
    ...mapState({
        homeData: state => state.home.homeData
      })
    },
    mounted(){
      this.$nextTick(()=>{
        this.initScroll()
      })
    },
    methods:{
      initScroll(){
        const classifyList = document.querySelectorAll('.classify-list')
        Array.from(classifyList).forEach((item,index)=>{
          new BScroll(item,{
            click: true,
            scrollX: true
          })
        })
      }
    },
    watch:{
      homeData(){
        this.$nextTick(()=>{
          this.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl";
  .classify-container
    background #fff
    margin-top 15px
    padding-bottom 50px
  .classify-container img
      width 100%
      height 370px
      margin-bottom 30px
    .classify-list
      display flex
      width 100%
      padding 0 30px 20px
      box-sizing border-box
      overflow hidden
      ul
        display flex
        flex-wrap nowrap
        li
          margin-right 20px
          img
            width 200px
            height 200px
            margin-bottom 10px
            background-color #F4F4F4
          .good-info
            font-size 20px
            span
              display block
              width 200px
            .good-price
              color $red
</style>