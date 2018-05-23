<template>
  <div class="product">
    <div class="product_top">
      <p>区块链钱包，打造安全数字资产</p>
      <p>助记词即钱包，请做好多重备份</p>
    </div>
    <div class="product_middle">
      <ul>
        <li>
          <img src="./images/Android.png" alt="Android">
          <p>Android版</p>
        </li>
        <li class="li_middle"></li>
        <li>
          <img src="./images/IOS.png" alt="IOS">
          <p>IOS版</p>
        </li>
      </ul>
      <div class="middle_info">
        <img src="./images/top.png" alt="">
        <div class="info_p">
          <p>全球流通，去中心化，无央行</p>
          <p>点对点转账，无需第三方</p>
        </div>
      </div>
    </div>
    <!--<div class="line"></div>-->
    <!--<div class="product_buttom">
      <div class="middle_info">
        <div class="info_p">
          <p>内置交易市场</p>
          <p>随时随地查看行情</p>
        </div>
        <img src="./images/down.png" alt="">
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .product_top {
    box-sizing border-box
    background-image: url('./images/banner.png');
    background-position: top center;
    background-repeat: no-repeat;
    height 600px
    padding-top 332px
    p {
      width 1200px
      margin 0 auto
      text-align center
      font-size: 24px;
      line-height 40px
    }
  }
  
  .product_middle {
    position relative
    width 1200px
    margin 0 auto
    color #222222
    ul {
      font-size 0
      text-align center
      position absolute
      left: 0;
      top -68px;
      right: 0;
      bottom: 0;
      margin: auto;
      li {
        font-size 20px
        display inline-block
        text-align center
        img {
          vertical-align top
        }
        p {
          margin-top 20px
        }
      }
      .li_middle {
        width 106px
        height 10px
      }
    }
    .middle_info {
      font-size 0
      padding-bottom 100px
      img {
        vertical-align top
        margin-top 100px
      }
      .info_p {
        display inline-block
        max-width 460px
        font-size 30px
        line-height 40px
        margin-top 270px
        margin-left 200px
      }
    }
  }
  
  .line {
    width 100%
    min-width 1200px
    height 20px
    background-color #eeeeee;
  }
  
  .product_buttom {
    width 1200px
    margin 0 auto
    color #222222
    .middle_info {
      font-size 0
      padding-bottom 100px
      .info_p {
        display inline-block
        width 384px
        font-size 30px
        line-height 40px
        margin-top 230px
        margin-left 200px
      }
      img {
        vertical-align top
        margin-top 100px
      }
    }
  }
</style>
