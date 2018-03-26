<template>
  <div id="app">
    <div class="head-wrap" ref="head">
      <div class="head">
        <a href="/">
          <img src="./common/images/logo_m.png"/>
        </a>
        <ul class="fr">
          <li class="nav">
            <router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <router-link to="/recommend">产品介绍</router-link>
          <li class="nav">
            <router-link to="/consult">咨询</router-link>
          </li>
          <li class="nav">
            <router-link to="/download">钱包下载</router-link>
          </li>
          <li class="nav">
            <router-link to="/we">关于我们</router-link>
          </li>
          <li class="nav">
            <router-link to="/browser">区块链浏览器</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view class="main"></router-view>
    <div class="footer-wrap">
      <div class="footer">
        <div class="fl">
          <div class="fl fl-box">
            <img src="./common/images/service.png" alt="产品服务">
            <p>产品服务</p>
            <ul>
              <li><a href="javascript:void(0)">下载钱包</a></li>
              <li><a href="javascript:void(0)">区块链浏览器</a></li>
            </ul>
          </div>
          <div class="fl fl-box">
            <img src="./common/images/scene.png" alt="应用场景">
            <p>应用场景</p>
            <ul>
              <li><a href="javascript:void(0)">区块链共享汽车</a></li>
              <li><a href="javascript:void(0)">汽车金融应用</a></li>
              <li><a href="javascript:void(0)">汽车大数据</a></li>
            </ul>
          </div>
          <div class="fl fl-box">
            <img src="./common/images/we.png" alt="关于我们">
            <p>关于我们</p>
            <ul>
              <li><a href="javascript:void(0)">公司简介</a></li>
              <li><a href="javascript:void(0)">联系我们</a></li>
              <li><a href="javascript:void(0)">加入我们</a></li>
            </ul>
          </div>
        </div>
        <div class="fr fr-box">
          <p>深圳市元征科技股份有限公司北京研发中心</p>
          <p>工作时间：08：30-18:30</p>
          <p>服务电话：010 - 58205388</p>
          <p>联系地址：北京市朝阳区建国路93号万达广场8号楼808</p>
        </div>
        <p class="clearfix ff">Copyright © 2018 深圳市元征科技股份有限公司北京研发中心 京ICP备************</p>
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
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 10px
    padding-bottom: 10px
    .head {
      box-sizing: border-box
      width: 1224px;
      margin: 0 auto;
      padding-left 12px
      height: 50px;
      line-height: 50px;
      img {
        vertical-align: middle
      }
      ul, .nav {
        display: inline-block;
      }
      
      .nav {
        margin-left 22px
        & > a {
          padding 0 12px
          display: inline-block;
          color #bdbdbd
          &.router-link-active, &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }
  
  .main {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top 70px
    width 100%
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
    height 210px
    background-color: rgba(0, 143, 254, 1);
    text-align: center;
    .footer {
      box-sizing: border-box
      width 1224px
      height 210px
      padding-left 40px
      padding-right 12px
      margin 0 auto
      .fl-box {
        text-align left
        padding-top 16px
        width 168px
        img {
          margin-left 19px
        }
        p {
          padding 10px 0
          font-size 16px
        }
        li {
          padding 5px 0
          a {
            color #ffffff
          }
        }
      }
      .fr-box {
        text-align right
        padding-top 32px
        p {
          padding 5px 0
        }
        p:first-child {
          padding 0 0 35px
        }
        
      }
      .ff {
        padding-top 25px
      }
    }
  }
</style>
