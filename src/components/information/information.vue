<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="information_list"></div>
  </div>
</template>

<script>
  export default {
    name: "information",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .information {
    .information_top {
      box-sizing border-box
      padding-top 90px
      height 600px
      background-image: url('./images/banner.png');
      background-position: top center;
      background-repeat: no-repeat;
    }
  }
</style>
