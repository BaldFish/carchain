<template>
  <div class="info_wrap">
    <div class="info">
      <h2>{{articleData.title}}</h2>
      <span>{{articleData.show_time}}</span>
      <img :src="articleData.picture_url" alt="">
      <div class="content" v-html="articleData.content">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info",
    data() {
      return {
        articleData: this.$store.state.clickArticleData
      }
    },
    mounted() {
      this.articleData = this.$store.state.clickArticleData
      this.articleData = JSON.parse(sessionStorage.getItem("clickData"))
    }
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
      text-align left
    }
  }
</style>
