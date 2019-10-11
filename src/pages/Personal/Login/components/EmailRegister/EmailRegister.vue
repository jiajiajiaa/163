<template>
  <div class="phoneLogin">
    <div class="img">
      <p>邮箱账号注册</p>
    </div>
    <div class="loginContainer">
      <input type="text" class="inPhone" placeholder="请输入邮箱账号" v-model="email">
      <span class="testPhone" v-show="isShowTestEmail">请输入正确的邮箱</span>
      <input type="text" class="inPhone" placeholder="请输入密码" v-model="firstPwd">
      <span class="testFirstpwd" v-show="isShowFirstPwd">密码格式不正确</span>
      <input type="text" class="inPhone" placeholder="请确认密码" v-model="nextPwd">
      <span class="testNextpwd" v-show="isShowNextPwd">两次密码输入不正确</span>
      <div class="loginbtn" @click="yanzheng()"><span>注册</span></div>
      <div class="other-login">
        <!-- <i class="iconfont" :class="{'icon-xuanzekuangxuanzhong':isSelected,'icon-xuanzekuangmoren':!isSelected}" @click="isSelected=!isSelected"></i> -->
        <i class="iconfont" :class="isSelected ? 'icon-xuanzekuangxuanzhong':'icon-xuanzekuangmoren'" @click="isSelected=!isSelected"></i>
        <p class="poxy">我同意
          <span>《网易服务条款》</span>
            和 
          <span>《网易隐私政策》</span>
        </p>
      </div>
      <span class="requiredTiaokuan" v-show="isShowRequiredTiaokuan">必须同意条款政策!!!</span>
      <div class="register" @click="checkShow(3)">
        <span>手机号注册 ></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isSelected:false,
        email:null,
        firstPwd:null,
        nextPwd:null,
        isShowTestEmail:false, //显示邮箱验证提示
        isShowFirstPwd:false, //显示第一次密码提示
        isShowNextPwd:false, // 显示再次输入密码的提示
        isShowRequiredTiaokuan:false, //显示阅读条例提示
      }
    },
    methods:{
      checkShow(number){
        this.$EventBus.$emit('checkLoginWay',number)
      },
      yanzheng(){
        const pwdReq = /^1[3456789]\d{9}$/
        const PwdReq = /^[A-Za-z0-9]{4,9}$/
        //验证手机号格式
        if(pwdReq.test(this.email)){
          this.isShowTestEmail = false
        }else{
          this.isShowTestEmail = true
        }
        //验证初次输入密码的格式
        if(PwdReq.test(this.firstPwd) & this.firstPwd){
          this.isShowFirstPwd = false
        }else{
          this.isShowFirstPwd = true
        }
        //验证两次输入的密码是否一致
        if(this.firstPwd === this.nextPwd & this.nextPwd){
          this.isShowNextPwd = false
        }else{
          this.isShowNextPwd = true
        }

        //判断是否选中已阅读
        if(this.isSelected){
          this.isShowRequiredTiaokuan = false
        }else{
          this.isShowRequiredTiaokuan = true
        }

        if(!this.isShowTestEmail & !this.isShowFirstPwd & !this.isShowNextPwd & !this.isShowRequiredTiaokuan){
          alert('验证成功，发送注册请求');
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
      padding-top 40px
      margin-bottom 150px
      font-size 36px
      text-align center
    .loginContainer
      position relative
      display flex
      flex-direction column
      padding 0 40px
      .testPhone
        position absolute
        left 42px
        top 80px
        font-size 24px
        color red
      .requiredTiaokuan
        position absolute
        left 35%
        top 470px
        font-size 24px
        color red
      .testFirstpwd
        position absolute
        left 42px
        top 170px
        font-size 24px
        color red
      .testNextpwd
        position absolute
        left 42px
        top 270px
        font-size 24px
        color red
      .inPhone
        border none
        border-bottom 0.5px solid #ddd
        height 91px
        font-size 28px
        margin-bottom 10px
      .inPwd
        border-bottom 0.5px solid #ddd
        margin-bottom 10px
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
        display flex
        justify-content center
        margin-bottom 40px
        .iconfont
          font-size 28px
          margin-right 5px
        p
          font-size 24px
          span
            color #007aff
      .register
        text-align center
        color #333
        font-size 28px
</style>