<template>
  <div class="scene">
    <div class="scene_top"></div>
    <div class="scene_list">
      <ul>
        <li>
          <img src="./images/one.png" alt="">
          <div class="list_text">
            <h2>汽车零部件行业的应用</h2>
            <p>汽车零部件商可获得“实时”的周边车辆的零部件需求，从而加速信息沟通，提高生意成功率；同时，通过基于对历史汽车维修检测数据的大数据分析，汽车零部件商可以更好地规划管理库存，提高库存周转率，降低库存资金积压。</p>
          </div>
        </li>
        <li class="reverse">
          <img src="./images/two.png" alt="">
          <div class="list_text">
            <h2>解决二手车交易的信息不对称</h2>
            <p>基于存证CDB的数据，消除了二手车交易的信息不对称，提高信息透明度，可为买家和卖家提供车辆历史维修检测数据。</p>
          </div>
        </li>
        <li>
          <img src="./images/three.png" alt="">
          <div class="list_text">
            <h2>解决新车交易的信息不对称</h2>
            <p>基于存证CDB的数据，可以随时获得新上市车辆的车况信息，如该车型的维修率、主要故障等，这将为消费者选择车型提供很大的帮助。</p>
          </div>
        </li>
        <li class="reverse">
          <img src="./images/four.png" alt="">
          <div class="list_text">
            <h2>协助汽车维修</h2>
            <p>基于存证CDB的数据，可为汽车维修人员提供“智能维修”功能，如：<br/>
              1）汽车维修人员可以随时获得相同车型的维修经验和方法，如主要故障、易坏零部件等；<br/>
              2）基于大数据训练出来的智能维修算法，这将为修理人员提供很大的帮助。</p>
          </div>
        </li>
        <li>
          <img src="./images/five.png" alt="">
          <div class="list_text">
            <h2>协助汽车制造厂改进质量</h2>
            <p>汽车零部件商可获得“实时”的周边车辆的零部件需求，从而加速信息沟通，提高生意成功率；同时，通过基于对历史汽车维修检测数据的大数据分析，汽车零部件商可以更好地规划管理库存，提高库存周转率，降低库存资金积压。</p>
          </div>
        </li>
        <li class="reverse">
          <img src="./images/six.png" alt="">
          <div class="list_text">
            <h2>协助追回被盗窃车辆</h2>
            <p>随时存证CDB的数据，可协助追回被盗窃车辆。</p>
          </div>
        </li>
        <li>
          <img src="./images/seven.png" alt="">
          <div class="list_text">
            <h2>协助车险定价和理赔</h2>
            <p>基于存证CDB的数据，车辆的车况信息将成为保险定价的重要依据。同时，通过勘察和理赔二个环节的汽车维修检测数据的对比，可减少用户恶意骗保的风险。</p>
          </div>
        </li>
        <li class="reverse">
          <img src="./images/eight.png" alt="">
          <div class="list_text">
            <h2>支持汽车金融</h2>
            <p>基于存证CDB的数据，车况信息将成为汽车金融业务的重要依据。</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "scene",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .scene {
    .scene_top {
      box-sizing border-box
      padding-top 90px
      height 600px
      background-image: url('./images/banner.png');
      background-position: top center;
      background-repeat: no-repeat;
    }
    .scene_list {
      width 1200px
      margin 0 auto
      font-size 0
      padding-top 30px
      li {
        clear both
        img {
          vertical-align middle
          float left
        }
        .list_text {
          float right
          margin-top 130px
          display inline-block
          width 613px
          padding-right 26px
          vertical-align middle
          h2 {
            font-size 24px
            color: #222222;
            margin-bottom 30px
          }
          p {
            color #666666;
            font-size 16px
            line-height 20px
          }
        }
      }
      .reverse {
        img {
          float right
        }
        .list_text {
          float left
        }
      }
    }
  }
</style>
