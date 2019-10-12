<template>
  <div :style="{height:'100%'}" class="div">
    <div class="contanier">
      <div class="outwrap" v-for="(i,index) in recommendData" :key="index">
        <div v-if="i.ad" class="adimg">
          <img v-lazy="i.ad.picUrl">
        </div>
        <div v-for="(topic,index) in i.topics" :key="index" class="topiclist">
          <div v-if="topic.style === 1" class="topicstyle1">
            <div class="user">
              <img v-lazy="topic.avatar">
              <span>{{topic.nickname}}</span>
            </div>
            <div class="title"><span>{{topic.title}}</span></div>
            <img v-lazy="topic.picUrl" class="bigImage">
            <div class="detail">
              <span class="iconfont icon-kanguo"></span>
              <p>{{topic.readCount}}人看过</p>
            </div>
          </div>
          <div v-if="topic.style === 2" class="topicstyle2">
            <div class="topic-left">
              <div class="user">
                <img v-lazy="topic.avatar">
                <span>{{topic.nickname}}</span>
              </div>
              <div class="title"><span>{{topic.title}}</span></div>
              <p class="subTitle">{{topic.subTitle}}</p>
              <div class="detail">
                <span class="iconfont icon-kanguo"></span>
                <p>{{topic.readCount}}人看过</p>
              </div>
            </div>
            <img v-lazy="topic.picUrl" class="bigImage">
          </div>
          <div v-if="topic.style === 3" class="topicstyle3">
            <div class="title"><span>{{topic.title}}</span></div>
            <div class="subTitle"><span>{{topic.subTitle}}</span></div>
            <ul class="imgitem">
              <li v-for="(img,index) in topic.itemList" :key="index">
                <img v-lazy="img.itemUrl">
              </li>
            </ul>
            <div class="detail">
              <span class="iconfont icon-kanguo"></span>
              <p>{{topic.readCount}}人看过</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {RECEIVE_RECOMMENDDATA} from '../../../../vuex/mutations-types'
  export default {
    data(){
      return{
        page:1
      }
    },
    computed:{
      ...mapState({
        recommendData:state => state.things.recommendData,
        lazyData:state => state.things.lazyData
      })
    },
    mounted(){
      this.$nextTick(()=>{
        this.initScroll()
      })
    },
    watch:{
      recommendData(){
        this.$nextTick(()=>{
          this.initScroll()
        })
      }
    },
    methods:{
      initScroll(){
        this.BS = new BScroll('.div',{
          scrollY:true,
          click:true,
          pullUpLoad:true
        })
        this.BS.on('pullingUp', async () => {
          await this.$store.dispatch('getLazyData',{page:this.page})
          const newData = [...this.recommendData,...this.lazyData]
          this.$store.commit(RECEIVE_RECOMMENDDATA,newData)
          this.page+=1
          console.log(this.recommendData);
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .div
    .contanier
      padding-top 72px
      padding-bottom 150px
      .outwrap
        .adimg
          background #fff
          margin 20px 0
          padding 30px 30px
          img
            height 376px
            width 690px
            margin 0 auto
        .topiclist
          .topicstyle1
            background #fff
            margin-bottom 20px
            padding 30px 30px
            .user
              display flex
              margin-bottom 20px
              img
                width 50px
                height 50px
                border-radius 50%
                margin-right 10px
              span
                font-size 24px
                text-align center
                height 50px
                line-height 50px
            .title
              font-size 40px
            .bigImage
              width 690px
              height 376px
              margin 10px auto
            .detail
              display flex
              box-sizing border-box
              padding-left 10px
              font-size 24px
              color: #999
              span
                margin-right 10px
          .topicstyle2
            display flex
            background #fff
            margin-bottom 20px
            padding 30px 30px
            .topic-left
              display flex
              flex-direction column
              justify-content space-between
              width 400px
              .user
                display flex
                margin-bottom 20px
                img
                  width 50px
                  height 50px
                  border-radius 50%
                  margin-right 10px
                span
                  font-size 24px
                  text-align center
                  height 50px
                  line-height 50px
              .title
                font-size 36px
                color #333
              .subTitle
                white-space nowrap
                color #7f7f7f
                font-size 28px
                text-overflow ellipsis
                overflow hidden
              .detail
                display flex
                box-sizing border-box
                padding-left 5px
                font-size 24px
                color: #999
                span
                  margin-right 10px
            .bigImage
              width 271px
              height 271px
              margin 10px auto
          .topicstyle3
            background #fff
            padding 30px 30px
            margin-bottom 20px
            display flex
            flex-direction column
            justify-content space-between
            .title
              font-size 36px
              color #333
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              margin-bottom 10px
            .subTitle
              color #7f7f7f
              font-size 28px
              margin-bottom 10px
            .imgitem
              display flex
              flex-wrap wrap
              justify-content space-between
              margin-bottom 20px
              li
                margin-bottom 10px
                img
                  width 166px
                  height 166px
            .detail
              display flex
              box-sizing border-box
              padding-left 5px
              font-size 24px
              color: #999
              span
                margin-right 10px
</style>
