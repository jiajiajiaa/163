<template>
  <div class="phoneLogin">
    <div class="img">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <div class="loginContainer">
      <input type="text" class="inPhone" placeholder="请输入手机号" v-model="phoneNumber">
      <span class="testPhone" v-show="isShowTestPhone">请输入正确的手机号</span>
      <div class="inPwd">
        <input type="text" placeholder="请输入短信验证码" v-model="yanzhengma">
        <button>获取验证码</button>
      </div>
      <span class="testYanzhengma" v-show="isShowYanzhengma">请输入正确的验证码</span>
      <div class="tips">
        <p>遇到问题？</p>
        <span>使用密码验证登陆</span>
      </div>
      <div class="loginbtn" @click="yanzheng()"><span>登陆</span></div>
      <div class="other-login" @click="checkShow(0)"><span>其他登陆方式</span></div>
      <div class="register" @click="checkShow(3)"><span>注册账号 ></span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        phoneNumber:null,
        yanzhengma:null,
        isShowTestPhone:false, //显示手机号验证提示
        isShowYanzhengma:false, //显示验证码提示
      }
    },
    methods:{
      checkShow(number){
        this.$emit('checkLoginWay',number)
      },
      yanzheng(){
        const pwdReq = /^1[3456789]\d{9}$/
        const yanzhengmaReq = /\d{4}/
        //验证手机号格式
        if(pwdReq.test(this.phoneNumber)){
          this.isShowTestPhone = false
        }else{
          this.isShowTestPhone = true
        }
        //验证验证码格式
        if(yanzhengmaReq.test(this.yanzhengma)){
          this.isShowYanzhengma = false
        }else{
          this.isShowYanzhengma = true
        }
        if(!this.isShowTestPhone & !this.isShowYanzhengma){
          alert('验证成功，发送登陆请求');
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../../../common/stylus/mixins.styl';
  .phoneLogin
    height 100%
    border-top 1px solid #ddd
    background #fff
    .img
      width 100%
      padding-top 80px
      margin-bottom 150px
      img
        height 64px
        width 200px
        margin 0 auto
    .loginContainer
      position relative
      display flex
      flex-direction column
      padding 0 40px
      .inPhone
        border none
        border-bottom 0.5px solid #ddd
        height 91px
        font-size 28px
        margin-bottom 10px
      .testPhone
        position absolute
        left 42px
        top 80px
        font-size 24px
        color red
      .testYanzhengma
        position absolute
        left 42px
        top 180px
        font-size 24px
        color red
      .inPwd
        border-bottom 0.5px solid #ddd
        margin-bottom 40px
        input
          border none
          height 91px
          font-size 28px
          margin-bottom 10px
          width 70%
        button
          height 58px
          background #fff
          border 1px solid #333
          border-radius 10px
          padding 0 10px
          font-size 28px
      .tips
        display flex
        justify-content space-between
        color #333
        font-size 30px
        margin-bottom 30px
      .loginbtn
        height 100px
        line-height 100px
        border-radius 5px
        background $red
        color #ffffff
        margin-bottom 30px
        span
          display inline-block
          width 100%
          text-align center
          font-size 28px
      .other-login
        height 100px
        line-height 100px
        border 1px solid $red
        border-radius 5px
        background #ffffff
        color $red
        margin-bottom 30px
        span
          display inline-block
          width 100%
          text-align center
          font-size 28px
      .register
        text-align center
        color #333
        font-size 28px
</style>