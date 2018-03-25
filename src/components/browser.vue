<template>
  <div class="browser_wrap">
    <div class="browser">
      <div class="browser_log" v-if="home_seen">
        <img src="../common/images/logo_b.png" alt="元链">
        <h1>元链</h1>
      </div>
      <div class="search_box">
        <div class="search_select_box" @mouseleave="leaveHid">
          <div class="" @click="showType($event)" :class="{ search_select:!togglebg,showdown:togglebg,}">{{searchType}}</div>
          <div style="height: 3px;width: 176px"></div>
          <ul class="" ref="select" :class="{search_type:!togglebg,showv:togglebg,}" @mouseleave="leaveHid">
            <li @click="changType($event)">区块高度</li>
            <li @click="changType($event)">区块哈希</li>
            <li @click="changType($event)">存证哈希</li>
            <li @click="changType($event)">交易哈希</li>
            <li @click="changType($event)">账户余额</li>
          </ul>
        </div>
        <input class="search_ipt" type="text" placeholder="请输入您要查找的内容" v-model="search_content" @keyup.enter.prevent="search">
        <button class="btn" @click.prevent="search"></button>
      </div>
      <div class="container_box" v-if="home_seen">
        
        <div class="count_box">
          <ul class="count">
            <li>
              <span>当前区块高度：</span>
              <span>{{blockNumbers}}</span>
            </li>
            <li>
              <span>最新出块时间：</span>
              <span>{{difftime}}</span>
            </li>
            <li>
              <span>合作方数量：</span>
              <span>{{partners}}</span>
            </li>
            <li>
              <span>交易数量：</span>
              <span>{{transactionCounts}}</span>
            </li>
            <li>
              <span>存证数量：</span>
              <span>{{saveCounts}}</span>
            </li>
          </ul>
        </div>
        
        <div class="info_box">
          <div class="info_title">
            <h2>最新区块</h2>
          </div>
          <div class="info">
            <ul class="info_th">
              <li style="width:164px">区块高度</li>
              <li style="width:716px">区块ID</li>
              <li style="width:152px">交易笔数</li>
              <li style="width:168px">出块时间</li>
            </ul>
            <ul class="info_tb" v-for="(item,index) in blocks" :class="index%2?'even':''" :key="item.number">
              <li style="width:164px">{{item.number}}</li>
              <li style="width:716px;cursor:pointer" @click="clickBlock($event)">{{item.hash}}</li>
              <li style="width:152px">{{item.transactions.length}}</li>
              <li style="width:168px">{{item.timestamp}}</li>
            </ul>
          </div>
        </div>
        <div class="info_box">
          <div class="info_title">
            <h2>最新存证</h2>
          </div>
          <div class="info">
            <ul class="info_th">
              <li style="width:164px">所属应用</li>
              <li style="width:716px">存证哈希</li>
              <li style="width:152px">存证类型</li>
              <li style="width:168px">存证时间</li>
            </ul>
            <ul class="info_tb saves even" v-for="(item,index) in saves">
              <li style="width:218px" class="apply">
                <a href="javascript:void(0)">
                  <img src="../common/images/logo_s.png" alt="">
                </a>
                <p>北京XXXXX科技有限公司</p>
              </li>
              <li style="width:662px;cursor:pointer" @click="clickSave($event)">{{item[3]}}</li>
              <li style="width:152px">{{item[1]}}</li>
              <li style="width:168px">{{item[4]}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block_info" v-if="block_seen">
        <div class="block_info_th">
          <h3>区块信息</h3>
          <p>查询时间：{{searchTime}}</p>
          <div class="block_info_md">
            <span class="left fl" @click="clickPrevious($event)"></span>
            <ul class="middle_left">
              <li>时间戳：</li>
              <li>区块高度：</li>
              <li>区块哈希：</li>
              <li>上一区块：</li>
            </ul>
            <ul class="middle_right">
              <li>{{searchBlock.timestamp}}</li>
              <li>{{searchBlock.number}}</li>
              <li>{{searchBlock.hash}}</li>
              <li>{{searchBlock.parentHash}}</li>
            </ul>
            <span class="right fr" @click="clickNext($event)"></span>
          </div>
        
        </div>
        <div class="block_info_tb">
          <p class="pre" v-html="searchBlockjp"></p>
        </div>
      </div>
      <div class="save_info block_info" v-if="save_seen">
        <div class="block_info_th">
          <h3>存证信息</h3>
          <div class="block_info_md">
            <ul class="middle_left">
            <li>存证发起方：</li>
            <li>存证类型：</li>
            <li>存证内容：</li>
            <li>存证哈希：</li>
            <li>存证时间：</li>
          </ul>
            <ul class="middle_right">
              <li>{{searchSaveHash[0]}}</li>
              <li>{{searchSaveHash[1]}}</li>
              <li>{{searchSaveHash[2]}}</li>
              <li>{{searchSaveHash[3]}}</li>
              <li>{{searchSaveHash[4]}}</li>
            </ul>
          </div>
        </div>
        <div class="block_info_th_right">
          <h3>所属应用信息</h3>
          <div class="th_right_md">
            <img src="../common/images/logo_save.png" alt="">
            <p>北京XXXXXXXX责任有限公司</p>
          </div>
        </div>
        <div class="block_info_tb">
          <p class="pre" v-html="searchSaveHashjp"></p>
        </div>
      </div>
      <div class="trade_info block_info" v-if="trade_seen">
        <div class="block_info_th">
          <h3>交易信息</h3>
          <p>查询时间：{{searchTime}}</p>
          <div class="block_info_md">
            <ul class="middle_left">
              <li>交易哈希：</li>
              <li>交易发起方：</li>
              <li>交易接收方：</li>
              <li>数值：</li>
            </ul>
            <ul class="middle_right">
              <li>{{searchTradeHash.hash}}</li>
              <li>{{searchTradeHash.from}}</li>
              <li>{{searchTradeHash.to}}</li>
              <li>{{searchTradeHash.value}}</li>
            </ul>
          </div>
        </div>
        <div class="block_info_tb">
          <p class="pre" v-html="searchTradeHashjp"></p>
        </div>
      </div>
      <div class="account_info block_info" v-if="account_seen">
        <div class="block_info_th">
          <h3>账户余额</h3>
          <div class="block_info_md">
            <ul class="middle_left">
              <li>用户ID：</li>
              <li>余额：</li>
            </ul>
            <ul class="middle_right">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import formatDate from "@/common/js/formatDate.js";
  import axios from "axios";
  import _ from "lodash";
  
  const reqURL = "http://wallet-api-test.launchain.org:50000";
  const tradeURL = "http://wallet-api-test.launchain.org:50000/v1/txn";
  //实例化web3对象
  var Web3 = require("web3");
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider(reqURL));
  //定义abi及调用合约
  var abi = [
    {
      constant: false,
      inputs: [
        {name: "typ", type: "string"},
        {name: "cont", type: "string"},
        {name: "hash", type: "string"},
        {name: "dtime", type: "string"}
      ],
      name: "attest",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{name: "newOwner", type: "address"}],
      name: "setOwner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {name: "addr", type: "address"},
        {name: "name", type: "string"},
        {name: "desc", type: "string"}
      ],
      name: "setPartnerInfo",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "addr", type: "address"}],
      name: "balanceAt",
      outputs: [{name: "", type: "uint256"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "attestsNunber",
      outputs: [{name: "", type: "uint256"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "addr", type: "address"}],
      name: "partnerInfo",
      outputs: [{name: "", type: "string"}, {name: "", type: "string"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "hash", type: "string"}],
      name: "acquireVerify",
      outputs: [
        {name: "", type: "address"},
        {name: "", type: "string"},
        {name: "", type: "string"},
        {name: "", type: "string"},
        {name: "", type: "string"}
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "partnerNumber",
      outputs: [{name: "", type: "uint256"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "addr", type: "address"}],
      name: "partnerAttestsNunber",
      outputs: [{name: "", type: "uint256"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "hash", type: "string"}],
      name: "verify",
      outputs: [{name: "", type: "bool"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "partnerList",
      outputs: [{name: "", type: "address[]"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {name: "addr", type: "address"},
        {name: "typ", type: "string"}
      ],
      name: "partnerAttestNunberByType",
      outputs: [{name: "", type: "uint256"}],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{name: "i", type: "uint256"}],
      name: "attestByIndex",
      outputs: [
        {name: "", type: "address"},
        {name: "", type: "string"},
        {name: "", type: "string"},
        {name: "", type: "string"},
        {name: "", type: "string"}
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {indexed: false, name: "PartnerName", type: "string"},
        {indexed: false, name: "AttestHash", type: "string"}
      ],
      name: "Attestation",
      type: "event"
    }
  ];
  var MyContract = web3.eth.contract(abi);
  var myContractInstance = MyContract.at(
    "0x5a8AB986b3F1A834063Fa278EcBeEa098FAd03Cb"
  );
  export default {
    name: "browser",
    data() {
      return {
        blockNumbers: "",
        partners: "",
        difftime: "",
        transactionCounts: "",
        saveCounts: "",
        blocks: [],
        saves: [],
        transactions: [],
        togglebg: false,
        searchType: "区块高度",
        search_content: "",
        searchTime: "",
        click_msg: "",
        searchBlock:{},
        searchBlockjp:{},
        searchSaveHash: {},
        searchSaveHashjp:{},
        searchTradeHash: {},
        searchTradeHashjp:{},
        searchAccountBalance: {
          miner: "",
          result: ""
        },
        searchAccountBalancejp:{},
        home_seen: true,
        block_seen: false,
        save_seen: false,
        trade_seen: false,
        account_seen: false,
      };
    },
    mounted() {
      var blocks = [];
      var transactions = [];
      var saves = [];
      // 获取区块数量
      this.blockNumbers = web3.eth.blockNumber;
      //获取合作方数量
      this.partners = myContractInstance.partnerNumber().c.toString();
      //获取交易数量
      axios
        .get(tradeURL)
        .then(res => {
          this.transactionCounts = res.data.count;
        })
        .catch(error => {
          this.transactionCounts = "";
        });
      //获取存证数量
      this.saveCounts = myContractInstance.attestsNunber().c.toString();
      //获取最新10个区块信息
      var blockCounts = this.blockNumbers;
      for (var i = blockCounts; i > blockCounts - 10; i--) {
        var info = web3.eth.getBlock(i);
        info.timestamp = formatDate(
          new Date(info.timestamp * 1000),
          "yyyy-MM-dd hh:mm:ss"
        );
        blocks.push(info);
      }
      this.blocks = blocks;
      // .sort(function(a, b) {
      //         return b.number - a.number;
      //       });
      //获取最新10个存证信息
      var counts = this.saveCounts - 1;
      for (var i = counts; i > counts - 10; i--) {
        saves.push(myContractInstance.attestByIndex(i));
        this.saves = saves.sort(function (a, b) {
          return b[4] - a[4];
        });
      }
      //每隔15秒重新获取数据
      var that = this;
      setInterval(function () {
        //获取最新合作方数量
        that.partners = myContractInstance.partnerNumber().c.toString();
        //获取最新交易数量
        axios
          .get(tradeURL)
          .then(res => {
            that.transactionCounts = res.data.count;
          })
          .catch(error => {
            that.transactionCounts = "";
          });
        //获取最新区块数和区块信息
        var newBlockNumbers = web3.eth.blockNumber;
        var newBlockCounts = newBlockNumbers - blockCounts;
        that.blockNumbers = newBlockNumbers;
        if (newBlockCounts === 0) {
        } else if (10 > newBlockCounts > 0) {
          for (var i = 1; i <= newBlockCounts; i++) {
            var newInfo = web3.eth.getBlock(i + blockCounts);
            newInfo.timestamp = formatDate(
              new Date(newInfo.timestamp * 1000),
              "yyyy-MM-dd hh:mm:ss"
            );
            blocks.unshift(newInfo);
            blocks.pop();
          }
          that.blocks = blocks;
          // .sort(function(a, b) {
          //   return b.number - a.number;
          // });
        } else {
          var blockCounts = newBlockNumbers;
          var blocks = [];
          for (var i = blockCounts; i > blockCounts - 10; i--) {
            var info = web3.eth.getBlock(i);
            info.timestamp = formatDate(
              new Date(info.timestamp * 1000),
              "yyyy-MM-dd hh:mm:ss"
            );
            blocks.push(info);
          }
          that.blocks = blocks;
          // .sort(function(a, b) {
          //   return b.number - a.number;
          // });
        }
        //获取最新存证数量
        that.saveCounts = myContractInstance.attestsNunber().c.toString();
        //获取最新存证信息
        var newSaveCounts = myContractInstance.attestsNunber().c.toString();
        var newCounts = newSaveCounts - that.saveCounts;
        if (newCounts === 0) {
        } else if (newCounts > 0) {
          if (newCounts < 10) {
            for (var i = 0; i < newCounts; i++) {
              saves.unshift(
                myContractInstance.attestByIndex(parseInt(that.saveCounts) + i)
              );
              saves.pop();
              that.saves = saves.sort(function (a, b) {
                return b[4] - a[4];
              });
            }
          } else {
            for (var i = 0; i < 10; i++) {
              saves.unshift(
                myContractInstance.attestByIndex(parseInt(that.saveCounts) + i)
              );
              saves.pop();
              that.saves = saves.sort(function (a, b) {
                return b[4] - a[4];
              });
            }
          }
          that.saveCounts = newSaveCounts;
        }
      }, 15000);
    },
    watch: {
      //获取最新出块时间
      blocks: function () {
        if (this.blocks.length > 1) {
          //方法2，可以直接在watch下写监听到变量发生变化后要运行的代码
          // var dateNew=new Date(this.blocks[0].timestamp)
          // var dateOld=new Date(this.blocks[1].timestamp)
          // this.difftime=(dateNew-dateOld)/1000+"s"
          this.getDiffTime();
        }
      }
    },
    methods: {
      //获取最新出块时间
      getDiffTime: function () {
        var dateNew = new Date(this.blocks[0].timestamp);
        var dateOld = new Date(this.blocks[1].timestamp);
        this.difftime = (dateNew - dateOld) / 1000 + "s";
      },
      //点击切换显示隐藏下拉列表和更换背景
      showType: function (event) {
        this.togglebg = !this.togglebg;
      },
      //离开元素隐藏下拉列表
      leaveHid: function () {
        if (this.togglebg === true) {
          this.togglebg = false;
        }
      },
      //更改搜索类型，并隐藏下拉列表
      changType: function (event) {
        this.searchType = event.target.innerText;
        console.log(this.searchType)
        this.togglebg = false;
      },
      //获取查询时间
      getSearchTime:function () {
        var searchTime = new Date();
        searchTime = formatDate(searchTime, "yyyy-MM-dd hh:mm:ss");
        return searchTime;
      },
      //json数据格式化
      syntaxHighlight: function (json) {
        if (typeof json != "string") {
          json = JSON.stringify(json, undefined, 2);
        }
        json = json
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">");
        return json.replace(
          /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
          function (match) {
            var cls = "number";
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = "key";
              } else {
                cls = "string";
              }
            } else if (/true|false/.test(match)) {
              cls = "boolean";
            } else if (/null/.test(match)) {
              cls = "null";
            }
            return (
              '<span style="word-wrap:break-word;overflow:hidden;" class="' +
              cls +
              '">' +
              match +
              "</span>"
            );
          }
        );
      },
      //点击区块ID显示对应的区块信息页
      clickBlock: function () {
        this.click_msg = event.target.innerText;
        this.home_seen = false;
        this.save_seen = false;
        this.block_seen = true;
        this.searchTime = this.$options.methods.getSearchTime();
        var that = this;
        this.searchBlock = _.find(that.blocks, function (o) {
          return o.hash === that.click_msg;
        });
        this.searchBlockjp = this.$options.methods.syntaxHighlight(this.searchBlock);
        console.log(this.search_content)
      },
      //查看上一个区块信息
      clickPrevious: function () {
        var nowNumber = this.searchBlock.number;
        this.searchTime = this.$options.methods.getSearchTime();
        var previousInfo = web3.eth.getBlock(nowNumber - 1);
        previousInfo.timestamp = formatDate(
          new Date(previousInfo.timestamp * 1000),
          "yyyy-MM-dd hh:mm:ss"
        );
        this.searchBlock = previousInfo;
        this.searchBlockjp = this.$options.methods.syntaxHighlight(this.searchBlock);
      },
      //查看下一个区块信息
      clickNext: function () {
        var nowNumber = this.searchBlock.number;
        this.searchTime = this.$options.methods.getSearchTime();
        var nextInfo = web3.eth.getBlock(nowNumber + 1);
        nextInfo.timestamp = formatDate(
          new Date(nextInfo.timestamp * 1000),
          "yyyy-MM-dd hh:mm:ss"
        );
        this.searchBlock = nextInfo;
        this.searchBlockjp = this.$options.methods.syntaxHighlight(this.searchBlock);
      },
      //点击存证哈希显示对应的存证信息页
      clickSave: function () {
        this.click_msg = event.target.innerText;
        var that = this;
        this.home_seen = false;
        this.block_seen = false;
        this.save_seen = true;
        this.searchSaveHash = _.find(that.saves, function (o) {
          return o[3] === that.click_msg;
        });
        this.searchSaveHashjp = this.$options.methods.syntaxHighlight(this.searchSaveHash);
      },
      clearSearch:function() {
        this.home_seen=false;
        this.block_seen=false;
        this.save_seen=false;
        this.trade_seen=false;
        this.account_seen=false;
      },
      search:function () {
        /*this.$options.methods.clearSearch();*/
        if (this.searchType === "区块高度") {
          //按区块高度或者区块哈希查询区块信息
          this.home_seen=false;
          this.block_seen=true;
          this.save_seen=false;
          this.trade_seen=false;
          this.account_seen=false;
          this.searchTime = this.$options.methods.getSearchTime();
          this.searchBlock=web3.eth.getBlock(this.search_content);
          this.searchBlock.timestamp = formatDate(
            new Date(this.searchBlock.timestamp * 1000),
            "yyyy-MM-dd hh:mm:ss"
          );
          this.searchBlockjp = this.$options.methods.syntaxHighlight(this.searchBlock);
        }else if (this.searchType === "区块哈希") {
          this.home_seen=false;
          this.block_seen=true;
          this.save_seen=false;
          this.trade_seen=false;
          this.account_seen=false;
          this.searchTime = this.$options.methods.getSearchTime();
          this.searchBlock=web3.eth.getBlock(this.search_content);
          this.searchBlock.timestamp = formatDate(
            new Date(this.searchBlock.timestamp * 1000),
            "yyyy-MM-dd hh:mm:ss"
          );
          this.searchBlockjp = this.$options.methods.syntaxHighlight(this.searchBlock);
        } else if (this.searchType === "存证哈希") {
          //按存证哈希查询存证信息
          this.home_seen=false;
          this.block_seen=false;
          this.save_seen=true;
          this.trade_seen=false;
          this.account_seen=false;
          this.searchTime = this.$options.methods.getSearchTime();
          this.searchSaveHash = myContractInstance.acquireVerify(
            this.search_content
          );
          this.searchSaveHashjp = this.$options.methods.syntaxHighlight(
            this.searchSaveHash
          );
        } else if (this.searchType === "交易哈希") {
          //按交易哈希查询交易信息
          this.home_seen=false;
          this.block_seen=false;
          this.save_seen=false;
          this.trade_seen=true;
          this.account_seen=false;
          this.searchTime = this.$options.methods.getSearchTime();
          this.searchTradeHash = web3.eth.getTransaction(this.search_content);
          this.searchTradeHashjp = this.$options.methods.syntaxHighlight(
            this.searchTradeHash
          );
        } else if (this.searchType === "账户余额") {
          //按账户地址查询余额
          this.home_seen=false;
          this.block_seen=false;
          this.save_seen=false;
          this.trade_seen=false;
          this.account_seen=true;
          this.searchTime = this.$options.methods.getSearchTime();
          this.searchAccountBalance = web3.eth.getBalance(this.search_content);
          console.log(this.searchAccountBalance)
          // this.searchAccountBalance = String(this.searchAccountBalance);
          this.searchAccountBalancejp = this.$options.methods.syntaxHighlight(
            this.searchAccountBalance
          );
          console.log(this.searchAccountBalancejp)
        }
      },
    },
    components: {}
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .browser_wrap {
    background-color: #040b1c;
    background-image: url('../common/images/bg-top.png'), url('../common/images/bg-bottom.png');
    background-position: top center, top 1080px center;
    background-repeat: no-repeat, repeat-y;
    padding-bottom: 55px;
    
    .browser {
      width: 1224px;
      margin: 0 auto;
      
      .browser_log {
        text-align: center;
        margin-top: 280px;
        
        h1 {
          margin-top: 10px;
          font-size: 22px;
          color: #008ffe;
        }
      }
      
      .search_box {
        box-sizing: border-box;
        text-align: center;
        padding-top: 38px;
        padding-bottom: 80px;
        font-size: 0;
        position: relative;
        
        .search_select_box, .search_ipt, .btn {
          outline: none;
          border: none;
          box-sizing: border-box;
          display: inline-block;
          height: 50px;
          line-height: 50px;
          background-color: #ffffff;
          box-shadow: 0px 3px 14px 1px rgba(255, 255, 255, 0.39);
          vertical-align: top;
          color: #222222;
          margin: 0 4px;
        }
        
        .search_select_box {
          border-radius: 25px 0px 0px 0px;
          .search_select {
            // select标签清除默认样式
            // appearance: none;
            // -moz-appearance: none;
            // -webkit-appearance: none;
            margin: 0;
            width: 126px;
            font-size: 18px;
            line-height: 50px;
            text-align: left;
            padding-left: 50px;
            box-shadow: 0px 3px 14px 1px rgba(255, 255, 255, 0.39);
            border-radius: 25px 0px 0px 0px;
            cursor: pointer;
            background-image: url('../common/images/up.png');
            background-position: top 17px right 15px;
            background-repeat: no-repeat;
          }
          .showdown {
            margin: 0;
            width: 126px;
            font-size: 18px;
            line-height: 50px;
            text-align: left;
            padding-left: 50px;
            box-shadow: 0px 3px 14px 1px rgba(255, 255, 255, 0.39);
            border-radius: 25px 0px 0px 0px;
            cursor: pointer;
            background-image: url('../common/images/down.png');
            background-position: top 17px right 15px;
            background-repeat: no-repeat;
          }
          .search_type {
            position: absolute;
            top: 91px;
            left: 0;
            box-sizing: border-box;
            width: 176px;
            height: 140px;
            line-height: 24px;
            background-color: #ffffff;
            border-radius: 0px 0px 25px 0px;
            font-size: 14px;
            text-align: left;
            padding-left: 50px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-left: 169px;
            color: #222222;
            visibility: hidden
            li {
              cursor: pointer;
            }
            
            li:hover {
              color: #008ffe;
            }
          }
          .showv {
            position: absolute;
            top: 91px;
            left: 0;
            box-sizing: border-box;
            width: 176px;
            height: 140px;
            line-height: 24px;
            background-color: #ffffff;
            border-radius: 0px 0px 25px 0px;
            font-size: 14px;
            text-align: left;
            padding-left: 50px;
            padding-top: 10px;
            padding-bottom: 10px;
            
            margin-left: 169px;
            color: #222222;
            visibility: visible
            li {
              cursor: pointer;
            }
            
            li:hover {
              color: #008ffe;
            }
          }
        }
        
        .search_ipt {
          width: 604px;
          line-height: 50px;
          padding-left: 15px;
          padding-right: 15px;
          font-size: 14px;
        }
        
        .btn {
          width: 90px;
          border-radius: 0px 0px 25px 0px;
          cursor: pointer;
          background-image: url('../common/images/search.png');
          background-position: top 12px left 26px;
          background-repeat: no-repeat;
        }
      }
      
      .container_box {
        padding-top: 126px;
        
        .count_box {
          width: 1200px;
          // margin-top: 126px;
          margin-bottom: 36px;
          margin-left: auto;
          margin-right: auto;
          background-color: rgba(0, 143, 254, 0.73);
          
          .count {
            display: flex;
            
            li {
              display: inline-block;
              flex: 1;
              text-align: center;
              height: 40px;
              line-height: 40px;
              
              span {
                display: inline-block;
                color: #ffffff;
                font-size: 16px;
              }
            }
          }
        }
        
        .info_box {
          margin-top: 0px;
          margin-bottom: 25px;
          margin-left: auto;
          margin-right: auto;
          
          .info_title {
            margin-left: 12px;
            margin-bottom: 2px;
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #0d50f9;
            border-radius: 15px 15px 0px 0px;
          }
          
          .info {
            width: 1200px;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0px 3px 26px 2px rgba(255, 255, 255, 0.31);
            border-radius: 0px 0px 25px 0px;
            
            ul {
              font-size: 0;
              margin: 0 auto;
              box-sizing: border-box;
              
              li {
                box-sizing: border-box;
                display: inline-block;
                font-size: 14px;
              }
            }
            
            .info_th {
              text-align: center;
              background-color: #a0a0a0;
              height: 30px;
              line-height: 30px;
            }
            
            .info_tb {
              height: 36px;
              line-height: 36px;
              color: #222222;
              
              li {
                border-right: 1px solid #a0a0a0;
                padding-left: 12px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              
              li:last-child {
                border-right: none;
              }
              
              .apply {
                padding-left: 0px;
                text-align: center;
                line-height: normal;
                
                a {
                  display: inline-block;
                  padding-top: 8px;
                }
              }
            }
            
            .saves {
              height: 82px;
              
              li {
                height: 82px;
                line-height: 82px;
                border-right: 1px solid #a0a0a0;
                border-bottom: 1px solid #a0a0a0;
                p {
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
            
            .even {
              background-color: #ffffff;
            }
            
            .even:last-child {
              border-radius: 0px 0px 25px 0px;
            }
            
            .info_tb:last-child {
              li {
                border-bottom: none;
              }
            }
            
            .info_tb:hover {
              background-color: #00e0dd;
              color: #ffffff;
              box-shadow: 0px 3px 7px 0px rgba(0, 198, 255, 0.39);
              
              li {
                border: none;
              }
            }
            
            .info_tb:last-child:hover {
              border-radius: 0px 0px 25px 0px;
            }
          }
        }
      }
      .block_info {
        width 1200px
        margin 0 auto
        font-size 0
        .block_info_th {
          margin-bottom 20px
          box-sizing border-box
          width 1200px
          height 184px
          background-color: #ffffff;
          border-radius: 10px;
          border: solid 1px #eeeeee;
          h3 {
            font-size: 16px;
            height: 36px;
            line-height: 36px;
            color: #ffffff;
            background-color: rgba(0, 143, 254, 0.77);
            border-radius: 10px 10px 0px 0px;
            background-image: url("../common/images/xinxi.png");
            background-position: left 10px center;
            background-repeat: no-repeat;
            padding-left 36px
          }
          p {
            font-size 14px
            color: #999999;
            padding-left 10px
            padding-top 8px
          }
          .block_info_md {
            font-size 0px
            color #666666
            padding 15px 10px
            
            .left, .middle_left, .middle_right, .right {
              display inline-block
              font-size 14px
            }
            .middle_left, .middle_right {
              line-height 24px
              height 24px
            }
            .middle_right {
              color #222222
              vertical-align top
              li {
                width 850px
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                height 24px
              }
            }
            .left, .right {
              margin 0 10px
              width 17px
              height 23px
              background-position: top center;
              background-repeat: no-repeat;
              position relative
              top 30px
              cursor pointer
            }
            .left {
              margin-right 20px
              background-image: url("../common/images/left.png");
            }
            .right {
              background-image: url("../common/images/right.png");
            }
          }
        }
        .block_info_tb {
          font-size 14px;
          color: #666666;
          width: 1200px;
          min-height 184px
          box-sizing border-box
          border: solid 1px #eeeeee;
          border-radius: 10px;
          background-color: #ffffff;
          padding 20px 10px;
          .pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow: hidden;
            line-height: 1.5;
            span {
              color aqua
            }
            
            .string {
              color: green;
            }
            
            .number {
              color: darkorange;
            }
            
            .boolean {
              color: blue;
            }
            
            .null {
              color: magenta;
            }
            
            .key {
              color: red;
            }
          }
        }
      }
      .trade_info {
        .block_info_th {
          h3 {
            background-image: url("../common/images/$.png");
          }
        }
      }
      .account_info {
        .block_info_th {
          h3 {
            background-image: url("../common/images/¥.png");
          }
        }
      }
      .save_info {
        .block_info_th {
          display inline-block
          width 960px
          .block_info_md {
            padding 14px 10px 13px
          }
          h3 {
            background-image: url("../common/images/cun.png");
          }
        }
        .block_info_th_right {
          float right
          display inline-block
          margin-bottom 20px
          box-sizing border-box
          width 230px
          height 184px
          background-color: #ffffff;
          border-radius: 10px;
          border: solid 1px #eeeeee;
          text-align center
          h3 {
            font-size: 16px;
            height: 36px;
            line-height: 36px;
            color: #ffffff;
            background-color: rgba(0, 143, 254, 0.77);
            border-radius: 10px 10px 0px 0px;
          }
          .th_right_md {
            font-size 14px
            color: #666666;
            padding 10px
            img {
              margin 11px
            }
            p {
              line-height 34px
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>
