<template>
  <div class="home">
    <!-- 头部 -->
    <Header class="header">
      <img slot="left" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
      <div slot="center" class="search_box" @click="$router.push('/search')">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
        <span class="placeholder">
          搜索商品，共23333件好物
        </span>
      </div>
      <span slot="right" class="login_btn" @click="$router.push('/personal/emaillogin')">
        登录
      </span>
    </Header>
    <HeaderNav></HeaderNav>
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
  import HeaderNav from './components/HeaderNav/HeaderNav'
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
      HeaderNav,
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
    .header
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
      .login_btn
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 15px
        margin-left: 8px
        font-size 24px
    .wrapper
      width 100%
      height 100%
      .content
        padding-bottom 100px
        background #f4f4f4  
</style>