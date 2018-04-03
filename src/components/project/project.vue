<template>
  <div class="project">
    <div class="introduce">
      <p>建立基于区打造一个更加安全、高效的汽车生态环境块链技术的分布式汽车数据生态</p>
    </div>
    <div class="introduce_list">
      <ul>
        <li><span></span>Cardata Ledger是汽车维修检测数据的完美解决方案。</li>
        <li><span></span>Cardata Ledger基于区块链技术构建一个透明、公正、公开的全球性汽车维修检测数据生态，让相关方成为数据贡献者、生态的建设者，最终成为汽车大数据生态。</li>
        <li><span></span>Cardata Ledger 认为收集全面、完善、高品质的汽车维修检测数据，并运用区块链技术进行存证，对于建立高效、可追溯、打通各环节的汽车后市场是有重要的、决定性的意义。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "project",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .introduce {
    box-sizing border-box
    padding-top 90px
    height 600px
    background-image: url('./images/introduce_top.png');
    background-position: top center;
    background-repeat: no-repeat;
    p {
      text-align center
      font-size 24px
      line-height 24px
      margin-top 250px
    }
  }
  .introduce_list{
    box-sizing border-box
    height 480px
    background-image: url('./images/introduce_down.png');
    background-position: top center;
    background-repeat: no-repeat;
    text-align center
    ul{
      display inline-block
      width 830px
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      li{
        font-size 18px
        line-height 24px
        text-align left
        margin-bottom 30px
        span{
          display inline-block
          width 20px
          height 20px
          background-color #00fffc
          vertical-align top
          border-radius 50%
          margin-right 30px
        }
      }
    }
  }
</style>
