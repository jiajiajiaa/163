<template>
  <div class="home">
    <!-- 头部 -->
    <Header></Header>
    <div class="wrapper">
      <div class="content">
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 服务政策 -->
        <ServicePoicy></ServicePoicy>
        <!-- 商品导航 -->
        <ShopNav></ShopNav>
        <!-- 福利区 -->
        <Welfare></Welfare>
        <!-- 品牌制造商区 -->
        <Manufactor></Manufactor>
        <!-- 类目热销榜 -->
        <HotSale></HotSale>
        <!-- 人气推荐 -->
        <Recommend></Recommend>
        <!-- 限时购 -->
        <FlashSale></FlashSale>
        <!-- 新品首发 -->
        <NewProducts></NewProducts>
        <Classify></Classify>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  import Header from '../../components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import ShopNav from './components/ShopNav/ShopNav'
  import ServicePoicy from './components/ServicePoicy/ServicePoicy'
  import Welfare from './components/Welfare/Welfare'
  import Manufactor from './components/Manufactor/Manufactor'
  import HotSale from './components/HotSale/HotSale'
  import Recommend from './components/Recommend/Recommend'
  import FlashSale from './components/FlashSale/FlashSale'
  import NewProducts from './components/NewProducts/NewProducts'
  import Classify from './components/Classify/Classify'

  import { reqShopNav } from '../../api'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    computed:{
      ...mapState({
        navList: state => state.home.homeData.kingKongModule
      }),
    },
    watch:{
      navList(){
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    },
    methods:{
      initScroll(){
        new BScroll(".wrapper", {
          click: true,
        })
      }
    },
    components:{
      Header,
      Swiper,
      ServicePoicy,
      ShopNav,
      Welfare,
      Manufactor,
      HotSale,
      Recommend,
      FlashSale,
      NewProducts,
      Classify
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    .wrapper
      width 100%
      height 100%
      .content
        padding-bottom 100px
        background #f4f4f4  
</style>