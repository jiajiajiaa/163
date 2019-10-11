<template>
  <div class="contannier">
    <div class="navscroll">
      <ul class="navTop" v-if="navData">
        <li v-for="(i,index) in navData" :key="index" :class="{active:index === currentId}" @click="currentId = index">
          <router-link to="/things/find/firstview">{{i.tabName}}</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currentId:0
      }
    },
    computed:{
      ...mapState({
        navData : state => state.things.navData
      })
    },
    watch:{
      navData(){
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    },
    methods:{
      initScroll(){
        new BScroll(".navscroll", {
          click: true,
          scrollX:true
        })
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.initScroll()
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .contannier
    margin-top 78px
    overflow hidden
    border-top 2px solid #eee
    .navscroll
      display flex
      border-bottom 2px solid #eee
      .navTop
        display flex
        height 70px
        background #fff
        li
          font-size 28px
          padding 10px 10px
          white-space nowrap
          margin-left 10px
          &.active
            border-bottom 3px solid #b4282d
</style>