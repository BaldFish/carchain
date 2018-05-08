<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="information_list">
      <ul>
        <li>
          <div class="info_left">
            <img src="./images/2.jpg" alt="">
          </div>
          <a href="#/info2">
            <div class="info_right">
              <h2>颠覆性举措 元征科技主张还数据主权于民</h2>
              <span>2018-04-10</span>
              <div class="article_content">
                随着社会信息化进程进入数据时代，海量数据的产生与流转成为常态，全球数据量将呈几何式爆发增长。预计到2020年，全球数据使用量将达到约40ZB（1ZB=10亿TB），将涵盖经济社会各个领域。经过大数据等信息技术的开发利用，这些杂乱无章的数据将为相关企业带来巨大的经济价值。与之相悖的是，大量数据被企业肆意用于商业用途牟取利益的同时，产生数据、提供数据的消费者本身却得不到任何形式的回报。
              </div>
            </div>
          </a>
        </li>
        <li>
          <div class="info_left">
            <img src="./images/1.jpg" alt="">
          </div>
          <a href="#/info1">
            <div class="info_right">
              <h2>清流！拒染币圈 元征科技大举布局区块链</h2>
              <span>2018-04-09</span>
              <div class="article_content">
                作为当下最炙手可热的科技名词，比特币近况惨淡，2018年迄今跌幅累计已达48%之多，其他数字货币也正遭遇跌跌不休的颓势。对于多数玩家来说，急于在币圈跑马圈钱、竞相追逐的结果是血本无归，与不久前的风头无两相比，更显颓伤。
                <br>与此相对，汽车检测行业龙头企业元征科技将目光对准区块链，将其视为技术本身，而非敛财手段，意欲重兵推进加大布局。对此，元征科技曾屡次公开表态：“无论衰与兴，拒绝染指数字货币与ICO，既不公募也不私募，专心致志挖掘链圈价值。”可谓行业的一股清流。
              </div>
            </div>
          </a>
        </li>
        <!--<li v-for="item in info_data" :key="item._id">
          <div class="info_left">
            <img :src="item.picture_url" alt="">
          </div>
          <a href="#/info1">
            <div class="info_right">
              <h2>{{item.title}}</h2>
              <span>{{item.showTime}}</span>
              <div class="article_content" v-html="item.content"></div>
            </div>
          </a>
        </li>-->
      </ul>
      <my-paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange"></my-paging>
    </div>
  </div>
</template>

<script>
  import myPaging from "./paging";
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  export default {
    name: "information",
    components: {myPaging},//显示的声明组件
    data() {
      return {
        pageSize: 2, //每页显示多少条数据
        currentPage: 1, //默认当前页码
        count: 10, //默认总记录数
        info_data: [],
      }
    },
    methods: {
      //获取数据
      getList() {
        //子组件监听到count变化会自动更新DOM
        axios
          .get(`${baseURL}/v1/essay?page=${this.currentPage - 1}&limit=${this.pageSize}`)
          .then(res => {
            if (res.status === 200) {
              this.info_data = res.data.info;
              this.count = res.data.count
            } else {
              this.info_data = "";
              this.count = 10;
            }
          })
      },
      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page;
        this.getList();
      }
    },
    mounted() {
      //请求第一页数据
      this.getList();
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
    .information_list {
      width 1200px
      margin 0 auto
      padding-bottom 50px
      li {
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
        a {
          display block
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
            .article_content {
              text-indent 2em
              font-size 16px
              line-height 30px
              color: #666666;
              margin-left 30px
              margin-right 36px
              margin-bottom 38px
              //显示9行文字后用...代替兼容性不好，适用于WebKit浏览器及移动端
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
</style>
