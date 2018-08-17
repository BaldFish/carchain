<template>
  <div class="home">
    
    <div class="carousel">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item.link_url">
          <a :href="item.link_url" target="_blank"><img :src="item.picture_url" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <!--   <div class="box1">
         <p>打造基于区块链技术的汽车数据生态</p>
       </div>-->
    <div class="box2">
      <div class="headline">
        <p></p>
        <span>愿景</span>
        <p></p>
      </div>
      <div class="vision">
        <p>基于区块链技术的汽车数据生态（CDB），将汽车的维修检测数据转化为有价值的数据资产，利用区块链技术分布式、不可篡改及价值传输的特点，使数据所有方，车主、维修人员、平台方等获得数据确权，通过数据需求方对数据资产的利用、互换、开发等形成强大的生态系统，从而产生更多的价值。</p>
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
            <p>汽车零部件行业</p></li>
          <li><img src="./images/02.png" alt="">
            <p>二手车交易的信息不对称</p></li>
          <li><img src="./images/03.png" alt="">
            <p>新车交易的信息不对称</p></li>
          <li class="no_margin"><img src="./images/04.png" alt="">
            <p>智能汽车维修</p></li>
          <li><img src="./images/05.png" alt="">
            <p>协助汽车制造厂改进质量</p></li>
          <li><img src="./images/06.png" alt="">
            <p>协助追回被盗窃车辆</p></li>
          <li><img src="./images/07.png" alt="">
            <p>智能车险定价和理赔</p></li>
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
          <p>区块链技术的发展日新月异，CDB的底层技术平台团队也将与时俱进，以打造汽车生态为目标，建立符合汽车行业生态发展的区块链技术基础平台。我们将在CDB生态的打造过程中逐步在多个领域持续推进技术革新，以建立具有技术全球领先性的行业区块链基础设施平台。</p>
          <a href="#/technology">了解详情</a>
        </div>
        <div class="car_right">
          <p>我们一直在探索区块链技术在汽车相关行业的应用，如上述八大示范性应用场景，并将会设计和落地更多的应用场景，最终发展成为一个以CDB区块链技术为载体的、基于汽车数据价值网络的巨大生态系统。</p>
          <a href="#/technology">了解详情</a>
        </div>
      </div>
    </div>
    <!--<div class="box5">
      <div class="headline">
        <p></p>
        <span>资讯</span>
        <p></p>
      </div>
      <div class="info_data" v-for="item in info_data" :key="item._id">
        <div class="info_left">
          <img :src="item.picture_url" alt="">
        </div>
        <div class="info_right">
          <h2>{{item.title}}</h2>
          <span>{{item.showTime}}</span>
          <p>{{item.content}}</p>
        </div>
      </div>
      <div class="info_data_more"><a href="#/information">查看更多</a></div>
    </div>-->
    <div class="box6">
      <div class="headline">
        <p></p>
        <span>合作伙伴</span>
        <p></p>
        <!--<span class="refresh"><img src="./images/refresh.png" alt="换一批"></span>-->
      </div>
      <div class="partner_data">
        <ul>
          <li>
            <div><img src="./images/partner_launch.jpg" alt="元征"></div>
            <p>深圳市元征科技股份有限公司</p>
          </li>
          <li>
            <div><img src="./images/partner_beimai.png" alt="北迈网"></div>
            <p>北京北迈科技股份有限公司</p>
          </li>
          <li>
            <div><img src="./images/partner_feibotong.png" alt="飞泊通"></div>
            <p>深圳市天行家科技有限公司</p>
          </li>
          <li>
            <div><img src="./images/partner_golo.png" alt="深圳市轱辘车联数据技术有限公司"></div>
            <p>深圳市轱辘车联数据技术有限公司</p>
          </li>
          <li>
            <div><img src="./images/partner_aiot.jpg" alt="深圳市物联网智能技术应用协会"></div>
            <p>深圳市物联网智能技术应用协会</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  
  export default {
    name: "home",
    data() {
      return {
        info_data: "",
        //用webpack搭建的项目不能直接使用绝对路径，要用require，如果不使用这个，必须是线上图片。http类型的
        bannerList: []
      }
    },
    mounted() {
      axios
        .get(`${baseURL}/v1/essay?page=0&limit=1`)
        .then(res => {
          if (res.status === 200) {
            this.info_data = res.data.info;
          } else {
            this.info_data = ""
          }
        }),
        //获取banner图
        axios({
          method: 'get',
          url: `${baseURL}/v1/broadcast/s?type_id=5b572f9ea4cc0d6ea8ba5483`
        }).then(res => {
          this.bannerList = res.data
        }).catch(error => {
          console.log(error)
        })
      
    },
  }
</script>

<style scoped lang="stylus">
  .home {
    min-width 1224px
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
      background-image: url('./images/cardatablockchain.png');
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
          margin 0 auto
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
      .info_data {
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
      .info_data_more {
        text-align center
        padding-top 34px
        padding-bottom 64px
        a {
          background-color #008ffe;
          border-radius: 4px;
          display inline-block
          color #ffffff
          font-size 18px
          padding 8px 10px
        }
      }
    }
    .box6 {
      box-sizing border-box
      background-color: rgba(0, 143, 254, 0.1);
      padding-bottom 58px
      .headline {
        width 1200px
        margin 0 auto
        position relative
        .refresh {
          position absolute
          right 0px
          padding 0px
          cursor pointer
        }
      }
      .partner_data {
        padding-top 40px
        width 1200px
        margin 0 auto
        font-size 0
        text-align center
        li {
          width 188px
          height 90px
          display inline-block
          text-align center
          background-color #ffffff
          margin-left 6px
          margin-right 6px
          margin-bottom 15px
          line-height 90px
          font-size 18px
          vertical-align top
          div {
            display: table-cell;
            width 188px
            height 90px
            vertical-align: middle;
            text-align: center;
            img {
              vertical-align: middle;
            }
          }
          p {
            display none
          }
        }
        li:hover {
          cursor pointer
          background-color: #008ffe;
          box-shadow: 0px 3px 9px 0px rgba(0, 143, 254, 0.33);
          padding-left 5px
          padding-right 5px
          width 178px
          div {
            display none
          }
          p {
            line-height 20px
            width 178px
            display block
            font-size 14px
            word-wrap: break-word;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
<style lang="stylus">
  .carousel {
    max-width 1920px
    //min-width 1212px
    height 800px
    margin 0 auto
    .el-carousel {
      width 100%
      height 100%
      .el-carousel__container {
        width 100%
        height 100%
        .el-carousel__arrow {
          width: 50px;
          height: 50px;
          font-size: 30px;
        }
        .el-carousel__item {
          width 100%
          height 100%
          text-align center
          a {
            img {
              width: 1920px;
              height 800px
              /*Firefox*/
              margin: 0 -moz-calc(50% - 1212px);
              /*chrome safari*/
              margin: 0 -webkit-calc(50% - 1212px);
              /*Standard */
              margin: 0 calc(50% - 1212px);
            }
          }
        }
      }
      .el-carousel__indicators {
        .el-carousel__indicator {
          padding: 20px 6px;
          .el-carousel__button {
            width: 36px;
          }
        }
      }
    }
  }
</style>
