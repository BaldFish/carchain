<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="tabs_box">
      <ul class="tabs">
        <li class="li-tab" v-for="(item,index) of tabsParam" @click="toggleTabs(index)" :class="{active:index!=nowIndex}">{{item}}</li>
      </ul>
    </div>
    <div class="divTab" v-show="nowIndex===0">
      <img src="./images/wenjing.png" alt="" style="margin-top: 10px;margin-bottom: 22px">
      <p>扫描二维码，即刻进入车链交流群</p>
    </div>
    <div class="divTab" v-show="nowIndex===1">
      <img src="./images/public.png" alt="" style="margin-top: 10px;margin-bottom: 22px">
      <p>扫描二维码，关注元链官方微信公众号</p>
    </div>
    <div class="divTab" v-show="nowIndex===2">
      <img src="./images/contact.png" alt="" style="margin-bottom: 38px">
      <p style="">联系电话：010 - 58205388</p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  import _ from "lodash";
  
  export default {
    name: "join",
    components: {},
    data() {
      return {
        tabsParam: ["加入车链群", "订阅公众号", "联系我们"],
        nowIndex: 0,
      }
    },
    methods: {
      toggleTabs(index) {
        this.nowIndex = index;
      },
    },
    mounted() {
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
    .tabs_box{
      text-align center
      position relative
      top -30px
      .tabs {
        display inline-block
        text-align center
        font-size 0
        box-shadow: 1px 8px 36px 3px rgba(125, 223, 255, 0.31);
        .li-tab {
          box-sizing border-box
          font-size 24px
          color #ffffff
          background-color: #00c0ff;
          display inline-block
          width 160px
          height 60px
          line-height 60px
          border-right 1px solid #eeeeee
          cursor pointer
        }
        .li-tab:last-child {
          border-right none
        }
        .active {
          background-color: #ffffff;
          color #666666
        }
      }
    }
    .divTab {
      box-sizing border-box
      width 1200px
      margin 0 auto
      padding-bottom 64px;
      font-size: 24px;
      color #666666
      text-align center
    }
  }
</style>
