<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="information_list">
      <ul>
        <li>
          <div class="info_left">
            <img src="./images/01.png" alt="">
          </div>
          <div class="info_right">
            <h2>汾阳市长一行到访瑞卓喜投 深度探讨区块链+汾酒溯源</h2>
            <span>2018/05/05</span>
            <p>
              3月7日上午，山西汾阳市市长吴晓东一行来到北京瑞卓喜投考察访问，与鑫苑科技集团执行总裁、瑞卓喜投CEO庞引明等领导共同讨论了区块链在政府建设内容，包括精准扶贫、食品溯源尤其是汾酒溯源等领域的应用前景，并深度讨论了在汾阳创建区块链产业园庞引明等领导共同讨论了区块链在政府建设内容，包括精准扶贫、食品溯源尤其是汾酒溯源等领域的应用前景，并深度讨论了在汾阳创建区块链产业园区的构想及落地实施方案区的构想及落地实施方案。与吴晓东市长同行的有：汾阳市副市长王琳、杏花村经济开发区常务副主任郝耀光、汾阳市国土局局长董士元、汾阳市招商局长王兆龙、山汾阳市国土局局长董士元、汾阳市招商局长王兆龙、山西金海帆置业有限公司董事长马莉山西金海帆置业有限公司行政总监生广杰等。龙、、山汾阳市、山汾阳市国土局局局...任郝耀光、汾阳市国土局局长董士元、汾阳市招商局长王兆龙、山汾阳市国土局局长董士元、汾阳市招商局长王兆龙、山西金海帆置业有限公司董事长马莉山西金海帆置业有限公司行政总监生广杰等。龙、、山汾阳市、山汾阳市国土局。</p>
          </div>
        </li>
      </ul>
      <my-paging></my-paging>
    </div>
  </div>
</template>

<script>
  import myPaging from "./paging";
  export default {
    name: "information",
    components: {myPaging},
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
  .information_list{
    width 1200px
    margin 0 auto
    li{
      width 1200px
      margin 0 auto
      margin-top 50px
      position relative
      .info_left {
        width 400px
        height 290px
        text-align center
        img {
          width 100%
          height 100%
        }
      }
      .info_right {
        box-shadow: 0px 0px 34px 5px rgba(0, 204, 255, 0.15);
        position absolute
        top 50%
        transform: translateY(-50%);
        right 0px
        width 940px
        background-color #ffffff
        h2 {
          color #000000;
          font-size 22px
          display inline-block
          line-height 56px
          margin-left 30px
        }
        span {
          color: #999999;
          font-size 14px
          float right
          display inline-block
          line-height 56px
          margin-right 30px
        }
        p {
          font-size 16px
          line-height 18px
          color: #666666;
          margin-left 30px
          margin-right 36px
          margin-bottom 38px
          //显示9行文字后用...代替兼容性不好，适用于WebKit浏览器及移动端
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  }
</style>
