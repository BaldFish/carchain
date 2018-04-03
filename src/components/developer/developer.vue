<template>
  <div class="developer">
    <div class="developer_top"></div>
    <div class="developer_down"></div>
  </div>
</template>

<script>
  export default {
    name: "developer",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .developer_top {
    box-sizing border-box
    padding-top 90px
    height 880px
    background-image: url('./images/developer01.png');
    background-position: top center;
    background-repeat: no-repeat;
  }
  
  .developer_down {
    box-sizing border-box
    height 880px
    background-image: url('./images/developer02.png');
    background-position: top center;
    background-repeat: no-repeat;
  }
</style>
