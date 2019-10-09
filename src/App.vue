<template>
  <div id="app">
    <!-- <router-link to="/home">Go to home</router-link> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  async mounted(){
    await this.$store.dispatch('getShopNav')
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
</style>
