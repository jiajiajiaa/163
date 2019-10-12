<template>
  <div id="app">
    <!-- <router-link to="/home">Go to home</router-link> -->
    <router-view></router-view>
    <Footer v-if="!$route.meta.isshow"></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  
  async mounted(){
    await this.$store.dispatch('getShopNav')
    await this.$store.dispatch('getCategorylist')
    await this.$store.dispatch('getNavData')
    await this.$store.dispatch('getRecommendData')
    await this.$store.dispatch('getHotSearch')
  },
  components:{
    Footer
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position absolute
    left 0
    top 0
</style>
