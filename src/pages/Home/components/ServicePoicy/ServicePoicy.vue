<template>
  <div class="servicePolicy">
    <ul class="wangyi-grow">
      <li>
        <i class="grow-icon"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .servicePolicy
    background-color #FFFFFF
    .wangyi-grow
      display flex
      justify-content space-around
      align-items center
      height 72px
      li
        display flex
        font-size 24px
        &:nth-of-type(1)
          i
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        &:nth-of-type(2)
          i
            background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        &:nth-of-type(3)
          i
            background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
        .grow-icon
          width 32px
          height 32px
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-size 32px 32px
          background-repeat no-repeat
          background-position center
          margin 0 10px 0 0
</style>