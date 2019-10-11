<template>
  <header class="header_box">
    <div class="header_search">
      <slot name="left"></slot>
      
      <slot name="center"></slot>
      
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header_box
    width 100%
    // height 72px
    position fixed
    top 0
    left 0
    z-index 200
    // border-bottom 1px solid #999
    .header_search
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: #fff;
      padding: 8px 15px;
</style>