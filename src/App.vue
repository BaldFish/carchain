<template>
  <div id="app">
    <div class="head-wrap" ref="head">
      <div class="head">
        <a class="logo" href="/">
          <img src="./common/images/logo_top.png"/>
        </a>
        <ul class="">
          <li class="nav">
            <router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <router-link to="/project">项目介绍</router-link>
          <li class="nav">
            <router-link to="/information">资讯</router-link>
          </li>
          <li class="nav">
            <router-link to="/scene">应用场景</router-link>
          </li>
          <li class="nav">
            <router-link to="/product">产品介绍</router-link>
          </li>
          <li class="nav">
            <router-link to="/developer">开发者计划</router-link>
          </li>
          <li class="nav">
            <router-link to="/book">白皮书</router-link>
          </li>
          <li class="nav">
            <router-link to="/browser">区块链浏览器</router-link>
          </li>
        </ul>
        <ul class="toggle">
          <li><a href="http://cn.cdblockchain.io/">中文</a></li>
        </ul>
      </div>
    </div>
    <router-view class="main"></router-view>
    <div class="footer-wrap">
      <div class="footer">
        <div class="fl-box">
          <img src="./common/images/service.png" alt="产品服务">
          <p>产品服务</p>
          <ul>
            <li><a href="#/project">项目介绍</a></li>
            <li><a href="#/technology">技术优势</a></li>
            <li><a href="#/developer">车链计划</a></li>
            <li><a href="#/browser">区块链浏览器</a></li>
          </ul>
        </div>
        <div class="fl-box">
          <img src="./common/images/scene.png" alt="应用场景">
          <p>应用场景</p>
          <ul>
            <li><a href="#/scene">汽车八大应用</a></li>
            <li><a href="#/bigdata">汽车大数据</a></li>
          </ul>
        </div>
        <div class="fl-box">
          <img src="./common/images/download.png" alt="app下载">
          <p>app下载</p>
          <ul>
            <li>
              <a href="#/product">
                <img src="./common/images/Android.png" alt="Android">
                <p>Android版</p>
              </a>
            </li>
            <!--<li>
              <a href="#/product">
                <img src="./common/images/IOS.png" alt="IOS">
                <p>IOS版</p>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  
  export default {
    name: "App",
    mounted() {
      window.addEventListener('scroll', this.headScroll)
    },
    methods: {
      headScroll: function () {
        window.scrollY > 30 ? (this.$refs.head.style.backgroundColor = "rgba(0,0,0,1)") : (this.$refs.head.style.backgroundColor = "rgba(0,0,0,0.5)")
      },
    },
  };
</script>

<style lang="stylus">
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .head-wrap {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.47);
    .head {
      position relative
      box-sizing: border-box
      width: 1200px;
      margin: 0 auto;
      text-align center
      .logo {
        img {
          vertical-align: middle
        }
      }
      .nav {
        display: inline-block;
        margin-left 20px
        margin-right 20px
        
        & > a {
          display: inline-block;
          color #bdbdbd
          box-sizing border-box
          padding 9px 0 9px
          &.router-link-active, &:hover {
            color: #ffffff;
            border-bottom 3px solid #ffffff
          }
        }
      }
      .toggle{
        position absolute
        top 50%
        transform translateY(-50%)
        right 0
        a{
          display block
          padding 10px
          font-size 14px
        }
      }
    }
  }
  
  .main {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    width 100%
    min-width 1224px
    .pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: hidden;
      line-height: 1.5;
      span {
        color #666666;
      }
      
      .string {
        color: #666666;
      }
      
      .number {
        color: #666666;
      }
      
      .boolean {
        color: #666666;
      }
      
      .null {
        color: #666666;
      }
      
      .key {
        color: #666666;
      }
    }
  }
  
  .footer-wrap {
    width 100%
    min-width 1224px
    background-color: #313131;
    .footer {
      background-color: #313131;
      display: flex;
      box-sizing: border-box
      width 1200px
      height 200px
      margin 0 auto
      .fl-box {
        flex: 1;
        text-align center
        padding-top 20px
        p {
          padding 7px 0 14px
          font-size 14px
        }
        li {
          padding 5px 0
          a {
            color #ffffff
            cursor pointer
          }
        }
      }
      .fl-box:last-child {
        font-size 0
        li {
          padding 5px 10px
          display inline-block
          img {
            vertical-align top
          }
          p {
            padding 5px 0
            font-size 14px
          }
        }
      }
    }
  }
</style>
