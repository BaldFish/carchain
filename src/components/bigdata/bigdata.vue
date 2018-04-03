<template>
  <div class="bigdata">
    <div class="big_top">
      <p>鼓励数据拥有者上传数据，防止作弊，恶意攻击行为</p>
    </div>
    <div class="big_middle">
      <ul>
        <li>
          <img src="./images/01.png" alt="">
          <p>收集各方零散数据，经过大数据分析应用，将数据变现；</p>
        </li>
        <li>
          <img src="./images/02.png" alt="">
          <p>数据采集方获得收益，即获得用户授权，避免侵犯个人隐私；</p>
        </li>
        <li>
          <img src="./images/03.png" alt="">
          <p>汽车，人整个生命历程全程记录避免数据缺失</p>
        </li>
        <li>
          <img src="./images/04.png" alt="">
          <p>打通各个行业数据，避免个别公司，企业人为干扰困扰；</p>
        </li>
        <li>
          <img src="./images/05.png" alt="">
          <p>避免人为更改数据，保全数据真实；</p>
        </li>
        <li>
          <img src="./images/06.png" alt="">
          <p>采用可信终端设备，所有数据源真实可靠；</p>
        </li>
        <li>
          <img src="./images/07.png" alt="">
          <p>公正交易平台，数据拥有方获得token，使用方消耗token，从而实现价值转移；</p>
        </li>
      </ul>
    </div>
    <div class="big_buttom"></div>
  </div>
</template>

<script>
  export default {
    name: "bigdata",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .big_top {
    box-sizing border-box
    background-image: url('./images/banner.png');
    background-position: top center;
    background-repeat: no-repeat;
    height 600px
    padding-top 340px
    p {
      width 1200px
      margin 0 auto
      text-align center
      font-size: 24px;
    }
  }
  
  .big_middle {
    box-sizing border-box
    max-width 1920px
    min-width 1200px
    height 730px
    padding-top 78px
    background-color: #f5f5f5;
    ul {
      width 1200px
      margin 0 auto
      text-align center
      font-size 0
      li {
        width 230px
        color: #222222;
        text-align center
        font-size 16px
        line-height 20px
        display inline-block
        padding 0 35px
        padding-bottom 64px
        p{
          padding-top 28px
        }
      }
    }
  }
  
  .big_buttom {
    background-image: url('./images/transfer.png');
    background-position: top center;
    background-repeat: no-repeat;
    height 700px
  }
</style>
