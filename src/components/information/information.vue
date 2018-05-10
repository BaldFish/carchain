<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="information_list">
      <ul>
        <li v-for="item in articleList" :key="item._id" :name="item._id">
          <div class="article_img">
            <img :src="item.picture_url" alt="">
          </div>
          <div class="article_top" @click="getArticleData($event)">
            <h2>{{item.title}}</h2>
            <span>{{item.show_time}}</span>
            <div class="article_main" v-html="item.content"></div>
          </div>
        </li>
      </ul>
      <!--<my-paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange"></my-paging>-->
      <div class="block" style="text-align:center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size=5
          :page-sizes="[5,10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import myPaging from "./paging";
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  import _ from "lodash";
  export default {
    name: "information",
    components: {myPaging},//显示的声明组件
    data() {
      return {
        /* pageSize: 2, //每页显示多少条数据
         currentPage: 1, //默认当前页码
         count: 10, //默认总记录数
         info_data: [],*/
        page: 0,
        limit: 5,//每页显示多少条数据
        currentPage: 1,//默认当前页码
        total: 20,//默认总记录数
        articleList: [],
        clickArticleData: ""
      }
    },
    methods: {
      getArticleData(event) {
        var id=event.currentTarget.parentNode.getAttribute("name");
        this.clickArticleData=_.find(this.articleList,function (o) {
          return o._id===id
        });
        this.$store.commit("changeArticleData",this.clickArticleData);
        window.location.href="/#/info"
      },
      handleSizeChange(val) {
        this.limit = val;
        this.getArticleList()
      },
      handleCurrentChange(val) {
        this.page = val - 1;
        this.getArticleList()
      },
      //分页获取文章列表数据
      getArticleList() {
        axios({
          method: "GET",
          url: `${baseURL}/v1/essay?page=${this.page}&limit=${this.limit}`
        })
          .then(res => {
            this.articleList = res.data.info;
            this.total = res.data.count
          })
          .catch(error => {
            this.articleList = [];
          });
      },
      /*//分页获取文章列表数据
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
      }*/
    },
    mounted() {
      //请求第一页数据
      // this.getList();
      this.getArticleList()
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
      box-sizing border-box
      width 1200px
      margin 0 auto
      padding-bottom 50px;
      li {
        width 1190px
        margin 0 auto
        margin-top 50px
        padding-left 5px
        padding-right 5px
        position relative
        .article_img {
          width 400px
          height 290px
          text-align center
          img {
            width 100%
            height 100%
          }
        }
        .article_top {
          cursor pointer
          width 930px
          box-shadow: 0px 0px 34px 5px rgba(0, 204, 255, 0.15);
          position absolute
          top 50%
          transform: translateY(-50%);
          right 5px
          background-color #ffffff
          h2 {
            color #000000;
            font-size 22px
            padding-top 30px
            display inline-block
            margin-left 30px
          }
          span {
            color: #999999;
            font-size 14px
            float right
            display inline-block
            padding-top 34px
            margin-right 30px
          }
          .article_main {
            height 100px
            margin 24px 36px 30px 30px
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 0;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>
