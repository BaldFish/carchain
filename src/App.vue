<template>
  <div id="app">
    <div class="head-wrap">
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
    <div class="footer">
      <p>©2018 元征区块链技术研究院.京ICP备88888888号-8</p>
      <p>版本
        <span>1.0.0</span>
      </p>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  
  export default {
    name: "App"
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
    background-color: #000000;
    opacity: 0.5;
    padding-top: 10px
    padding-bottom: 10px
    .head {
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
    width: 1224px;
  }
  
  .footer {
    background-color: #3a3a3a;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    
    p {
      width: 1224px;
      height: 30px;
      line-height: 30px;
      margin: 0 auto;
    }
  }
</style>
