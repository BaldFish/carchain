<template>
  <div class="technology">
    <div class="technology_top">
      <p>建立基于区块链技术的分布式汽车数据生态</p>
    </div>
    <div class="technology_middle"></div>
    <div class="technology_buttom">
      <div class="buttom_info">
        <h2>平台亮点及技术积累</h2>
        <div class="info_list">
          <img src="./images/01.png" alt="">
          <ul>
            <li>1. 区块链底层架构性能与功能</li>
            <li>1) 为了支撑整个汽车应用生态的稳定运行，平台具备高效的TPS和低延时特性，并具备平行扩容优化能力，以支撑超级车链的海量数据应用需求；</li>
            <li>2) 平台利用PKI机制，实现了节点管理及用户权限管理的数字证书体系；</li>
            <li>3) 为了支持从联盟链向共有链转移的技术愿景，平台具备了共识算法框架可拔插的共识机制实现，并支持多种联盟链及共有链标准的公式算法；</li>
            <li>4) 平台实现了共识节点动态准入和准出机制。</li>
          </ul>
        </div>
        <div class="info_list">
          <img src="./images/02.png" alt="">
          <ul>
            <li>2. 区块链业务层实现</li>
            <li>1) 数据存证是ACRU打造最重要的一环，平台致力于创建标准化且丰富的存证接口标准化封装能力；</li>
            <li>2) 平台实现了标准化的接口及SDK解决方案，为行业用户提供快速、高效的应用服务；</li>
            <li>3) 平台致力于实现与链外数字资产和数字信息交换机制，支持跨链通信和数据校验、实现跨链安全交易及跨链对账；</li>
            <li>4) 平台支持全面的区块链监控及业务管理，保障生态的业务运营质量。</li>
          </ul>
        </div>
        <div class="info_list">
          <img src="./images/03.png" alt="">
          <ul>
            <li>3. 区块链安全</li>
            <li>1) 平台实现了全方位、多层次的安全防护，满足最高要求的安全标准；</li>
            <li>2) 所有用户数据均进行高强度的加密保护；</li>
            <li>3) 对于第三方的区块链数据存储及取证请求均需要通过高强度的安全认证；</li>
            <li>4) 基于汽车行业应用的特殊性，实现基于不同应用场景的隐私保护方法，全面保障用户数据隐私；</li>
            <li>5) 平台致力于抗量子攻击的加密算法研究，为后量子时代来临提前做好技术储备。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "technology",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .technology_top {
    box-sizing border-box
    background-image: url('./images/vision.png');
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
  
  .technology_middle {
    box-sizing border-box
    background-image: url('./images/line.png');
    background-position: top center;
    background-repeat: no-repeat;
    height 700px
  }
  
  .technology_buttom {
    box-sizing border-box
    background-image: url('./images/one.png');
    background-position: top 52px center;
    background-repeat: no-repeat;
    padding-top 52px
    padding-bottom 70px
    .buttom_info {
      width 1200px
      margin 0 auto
      h2 {
        font-size 20px
        line-height 40px
      }
      .info_list {
        font-size 0
        margin-top 32px
        img {
          vertical-align top
          margin-right 10px
          display inline-block
        }
        ul {
          box-sizing border-box
          max-width 1100px
          display inline-block
          font-size 16px
          line-height 20px
          color #666666;
          li {
            padding-left 20px
          }
          li:first-child {
            text-indent 0
            padding-left 0
            color #222222
            font-size 18px
            line-height 22px
          }
        }
      }
    }
  }
</style>
