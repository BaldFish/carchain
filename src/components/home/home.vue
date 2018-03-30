<template>
  <div class="home">
    <div class="box1">
      <p>打造基于区块链技术的汽车数据生态</p>
    </div>
    <div class="box2">
      <div class="headline">
        <p></p>
        <span>愿景</span>
        <p></p>
      </div>
      <div class="vision">
        <p>基于区块链技术的汽车数据生态（ACRU），将汽车的维修检测数据转化为有价值的数据资产，利用区块链技术分布式、不可篡改及价值传输的特点，使数据所有方，车主、维修人员、平台方等获得数据确权，通过数据需求方对数据资产的利用、互换、开发等形成强大的生态系统，从而产生更多的价值。</p>
      </div>
    </div>
    <div class="box3">
      <div class="headline">
        <p></p>
        <span>更多应用场景</span>
        <p></p>
      </div>
      <div class="more_scene">
        <ul>
          <li><img src="./images/01.png" alt="">
            <p>汽车零部件行业汽车零部件行业qweq</p></li>
          <li><img src="./images/02.png" alt="">
            <p>二手车交易的信息不对称</p></li>
          <li><img src="./images/03.png" alt="">
            <p>新车交易的信息不对称</p></li>
          <li class="no_margin"><img src="./images/04.png" alt="">
            <p>协助汽车维修</p></li>
          <li><img src="./images/05.png" alt="">
            <p>协助汽车制造厂改进质量</p></li>
          <li><img src="./images/06.png" alt="">
            <p>协助追回被盗窃车辆</p></li>
          <li><img src="./images/07.png" alt="">
            <p>协助车险定价和理赔</p></li>
          <li class="no_margin"><img src="./images/08.png" alt="">
            <p>支持汽车金融</p></li>
        </ul>
      </div>
    </div>
    <div class="box4">
      <div class="headline">
        <p></p>
        <span>汽车大数据运用</span>
        <p></p>
      </div>
      <div class="car_data">
        <div class="car_left">
          <p>区块链技术的发展日新月异，ACRU的底层技术平台团队也将与时俱进，以打造汽车生态为目标，建立符合汽车行业生态发展的区块链技术基础平台。我们将在ACRU生态的打造过程中逐步在多个领域持续推进技术革新，以建立具有技术全球领先性的行业区块链基础设施平台。</p>
          <a href="javascript:void(0)">了解详情</a>
        </div>
        <div class="car_right">
          <p>我们一直在探索区块链技术在汽车相关行业的应用，如上述八大示范性应用场景，并将会设计和落地更多的应用场景，最终发展成为一个以ACRU区块链技术为载体的、基于汽车数据价值网络的巨大生态系统。</p>
          <a href="javascript:void(0)">了解详情</a>
        </div>
      </div>
    </div>
    <div class="box5">
      <div class="headline">
        <p></p>
        <span>资讯</span>
        <p></p>
      </div>
    </div>
    <div class="box6">
      <div class="headline">
        <p></p>
        <span>合作伙伴</span>
        <p></p>
      </div>
    </div>
  
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .home {
    .headline {
      font-size 0;
      color: #008ffe;
      text-align center
      padding-top 46px
      p {
        display inline-block
        width: 56px;
        height: 1px;
        background-color: #008ffe;
        vertical-align middle
      }
      span {
        font-size 22px;
        display inline-block
        padding 0 15px
        vertical-align middle
      }
    }
    .box1 {
      box-sizing border-box
      padding-top 90px
      height 800px
      background-image: url('./images/cardataledger.png');
      background-position: top center;
      background-repeat: no-repeat;
      p {
        text-align center
        font-size 24px
        line-height 24px
        margin-top 340px
      }
    }
    .box2 {
      box-sizing border-box
      height 787px
      background-image: url('./images/vision.png');
      background-position: top center;
      background-repeat: no-repeat;
      position: relative;
      .vision {
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 50%;
        width 100%
        transform: translateY(-50%);
        p {
          margin 30px auto
          width 700px
          text-align center
          font-size 22px
          line-height 30px
        }
      }
    }
    .box3 {
      box-sizing border-box
      background-color: rgba(0, 143, 254, 0.1);
      .more_scene {
        width 1200px
        margin 0 auto
        ul {
          font-size 0
          text-align center
          padding-top 90px
          padding-bottom 54px
          li {
            margin-right 68px
            margin-bottom 36px
            font-size 26px
            display inline-block
            position relative
            text-align center
            img {
              vertical-align top
            }
            p {
              width 184px
              line-height 28px
              margin-left 32px
              position absolute
              top 120px
              text-align center
            }
          }
          .no_margin {
            margin-right 0
          }
        }
        
      }
    }
    .box4 {
      box-sizing border-box
      height 796px
      background-image: url('./images/data.png');
      background-position: top center;
      background-repeat: no-repeat;
      .headline {
        color #ffffff
        p {
          background-color #ffffff
        }
      }
      .car_data {
        width 1200px
        margin 0 auto
        font-size 0
        text-align center
        .car_left, .car_right {
          font-size 18px
          display inline-block
          width 550px
          vertical-align top
          text-align left
          line-height 22px
          p {
            padding-bottom 40px
          }
          a {
            display inline-block
            padding 8px
            background-color: #00f6ff;
            border-radius: 4px;
            color: #0a11e7;
            vertical-align top
          }
        }
        .car_left {
          padding-top 430px
          padding-right 30px
        }
        .car_right {
          padding-top 82px
        }
      }
    }
    .box5 {
      box-sizing border-box
    }
    .box6 {
      box-sizing border-box
      background-color: rgba(0, 143, 254, 0.1);
    }
  }
</style>
