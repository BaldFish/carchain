<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="information_list">
      <ul>
        <li v-for="item in info_data" :key="item._id">
          <div class="info_left">
            <img :src="item.picture_url" alt="">
          </div>
          <div class="info_right">
            <h2>{{item.title}}</h2>
            <span>{{item.showTime}}</span>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
      <my-paging></my-paging>
    </div>
  </div>
</template>

<script>
  import myPaging from "./paging";
  import formatDate from "@/common/js/formatDate.js";
  import axios from "axios";
  import _ from "lodash";
  let articleUrl="http://wallet-api-test.launchain.org:50000/v1/essay?page=0&limit=16";
  export default {
    name: "information",
    components: {myPaging},
    data() {
      return {
        info_data: "",
      }
    },
    mounted() {
      axios
        .get(articleUrl)
        .then(res => {
          if (res.status === 200) {
            this.info_data = res.data.info;
          } else {
            this.info_data = ""
          }
        })
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
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  }
</style>
