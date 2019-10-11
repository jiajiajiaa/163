<template>
  <div class="contanier">
    <Header>
      <div slot="left" class="tohome" @click="$router.push('/home')">
        <span class="iconfont icon-shouye"></span>
      </div>
      <div slot="center" class="mian-header">
        <span :class="{active:'/things/find/firstview'===$route.path}" @click="$router.push('/home')">网易严选</span>
      </div>
      <div slot="right" class="right">
        <span class="iconfont icon-sousuo1" @click="$router.push('/search')"></span>
        <span class="iconfont icon-gouwuche2" @click="$router.push('/shopcar')"></span>
      </div>
    </Header>
    <div class="login">
      <div v-if="loginWay === 0" class="login-item">
        <LoginWay :checkLoginWay='checkLoginWay'></LoginWay>
      </div>
      <div v-if="loginWay === 1" class="login-item">
        <PhoneLogin @checkLoginWay='checkLoginWay'></PhoneLogin>
      </div>
      <div v-if="loginWay === 2" class="login-item">
        <!-- <p>邮箱登陆界面</p> -->
        <PhoneLogin @checkLoginWay='checkLoginWay'></PhoneLogin>
      </div>
      <div v-if="loginWay === 3" class="login-item">
        <!-- 手机号注册 -->
        <PhoneRegister></PhoneRegister>
      </div>
      <div v-if="loginWay === 4" class="login-item">
        <!-- 邮箱注册 -->
        <EmailRegister></EmailRegister>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../../components/Header/Header'
  import LoginWay from './components/LoginWay/LoginWay'
  import PhoneLogin from './components/PhoneLogin/PhoneLogin'
  import PhoneRegister from './components/PhoneRegister/PhoneRegister'
  import EmailRegister from './components/EmailRegister/EmailRegister'
  export default {
    data(){
      return{
        loginWay:0  //0：选择登陆方式界面 1：手机号登陆 2：邮箱登陆 3:手机号注册 4:邮箱注册
      }
    },
    mounted(){
      this.$EventBus.$on('checkLoginWay',this.checkLoginWay)
    },
    beforeDestroy(){
      this.$EventBus.$off('checkLoginWay')
    },
    methods:{
      checkLoginWay(number){
        this.loginWay = number
      }
    },
    components:{
      Header,
      LoginWay,
      PhoneLogin,
      PhoneRegister,
      EmailRegister
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl';
  .contanier
    background #f2f5f4
    Header
      height 86px
      .tohome
        width 33%
        margin-top 10px
        background #fff
        span
          font-size 46px
      .mian-header
        width 33%
        margin-top 10px
        font-size 34px
        color #777
        background #fff
        text-align center
      .right
        margin-top 10px
        width 33%
        background #fff
        display flex
        justify-content flex-end
        span
          font-size 46px
          margin-right 20px
          color #000
    .login
      margin-top 86px
      height 1248px
      .login-item
        height 100%
</style>