<template>
  <div class="info_wrap">
    <div class="info">
      <h2></h2>
      <span></span>
      <img src="" alt="">
      <div class="content">
      
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .info {
    padding-top 110px
    width 1200px
    margin 0 auto
    text-align center
    padding-bottom 30px
    h2 {
      font-size: 22px;
      line-height 42px
      color: #222222;
      text-align left
    }
    span {
      display block
      font-size 16px
      color: #666666;
      text-align left
    }
    img {
      margin-top 20px
      margin-bottom 20px
    }
    .content {
      p {
        text-indent 2em
        text-align left
        line-height 2
        color #333333
        font-size 14px
      }
      h3 {
        text-indent 2em
        text-align left
        line-height 1.5
        color #333333
        font-weight bold
        font-size 16px
      }
    }
  }
</style>
