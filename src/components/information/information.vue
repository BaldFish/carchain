<template>
  <div class="information">
    <div class="information_top"></div>
    <div class="tabs_box">
      <ul class="tabs">
        <li class="li-tab" v-for="(item,index) of tabsParam" @click="toggleTabs(index)" :class="{active:index!=nowIndex}">{{item}}</li>
      </ul>
    </div>
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
      <div class="block" style="text-align:center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
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
        page: 0,
        limit: 5,//每页显示多少条数据
        currentPage: 1,//默认当前页码
        total: 20,//默认总记录数
        articleList: [],
        clickArticleData: "",
        article_type:[],
        tabsParam:["全部"],
        nowIndex:0,
      }
    },
    mounted() {
      //请求第一页数据
      this.getArticleList()
      //获取文章类型
      axios({
        method: "GET",
        url:
          `${baseURL}/v1/essay-catg/all`
      })
        .then(res => {
          this.article_type = res.data;
          this.article_type.forEach((item)=>{
            this.tabsParam.push(item.category_name)
          })
        })
        .catch(error => {
          this.article_type = [];
        });
    },
    methods: {
      toggleTabs(index){
        this.nowIndex=index;
        this.page=0;
        this.currentPage=1
        this.getArticleList();
      },
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
        this.page = val-1;
        this.getArticleList()
      },
      //分页获取文章列表数据
      getArticleList() {
        axios({
          method: "GET",
          url: `${baseURL}/v1/essay?page=${this.page}&limit=${this.limit}&essay_catg=${this.nowIndex}`
        })
          .then(res => {
            this.articleList = res.data.info;
            this.total = res.data.count
          })
          .catch(error => {
            this.articleList = [];
          });
      },
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
      .tabs{
        display inline-block
        text-align center
        font-size 0
        box-shadow: 1px 8px 36px 3px rgba(125, 223, 255, 0.31);
        .li-tab{
          box-sizing border-box
          font-size 24px
          color #ffffff
          background-color: #00c0ff;
          display inline-block
          width 140px
          height 60px
          line-height 60px
          border-right 1px solid #eeeeee
          cursor pointer
        }
        .li-tab:last-child{
          border-right none
        }
        .active{
          background-color: #ffffff;
          color #666666
        }
      }
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
            p{
              color antiquewhite
            }
          }
        }
      }
    }
  }
</style>
