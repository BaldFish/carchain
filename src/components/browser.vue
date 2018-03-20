<template>
  <div class="browser_wrap">
    <div class="browser">
      <div class="browser_log">
        <img src="../common/images/logo_b.png" alt="元链">
        <h1>元链</h1>
      </div>
      <div class="search_box">
        <select name="" class="search_select" v-model="searchType">
          <option value="block_height">区块高度</option>
          <option value="block_hash">区块哈希</option>
          <option value="trade_hash">交易哈希</option>
          <option value="save_hash">存证哈希</option>
          <option value="account_balance">账户余额</option>
        </select>
        <input class="search_ipt" type="text" placeholder="请输入您要查找的内容" v-model="search_content" @keyup.enter.prevent="">
        <button class="btn" @click.prevent=""></button>
      </div>
      <div class="container_box">

        <div class="count_box">
          <ul class="count">
            <li>
              <span>当前区块高度：</span>
              <span>{{}}</span>
            </li>
            <li>
              <span>最新出块时间：</span>
              <span>{{}}</span>
            </li>
            <li>
              <span>合作方数量：</span>
              <span>{{}}</span>
            </li>
            <li>
              <span>交易数量：</span>
              <span>{{}}</span>
            </li>
            <li>
              <span>存证数量：</span>
              <span>{{}}</span>
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
            <ul class="info_tb">
              <li style="width:164px">区块高度</li>
              <li style="width:716px">区块ID</li>
              <li style="width:152px">交易笔数</li>
              <li style="width:168px">出块时间</li>
            </ul>
          </div>
          <!-- <div class="info_tab">
            <table class='tab'>
              <thead>
                <tr>
                  <th style="width:164px">区块高度</th>
                  <th style="width:716px">区块ID</th>
                  <th style="width:152px">交易笔数</th>
                  <th style="width:168px">出块时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import "@/common/stylus/index.styl";
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
      { name: "typ", type: "string" },
      { name: "cont", type: "string" },
      { name: "hash", type: "string" },
      { name: "dtime", type: "string" }
    ],
    name: "attest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "addr", type: "address" },
      { name: "name", type: "string" },
      { name: "desc", type: "string" }
    ],
    name: "setPartnerInfo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "addr", type: "address" }],
    name: "balanceAt",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "attestsNunber",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "addr", type: "address" }],
    name: "partnerInfo",
    outputs: [{ name: "", type: "string" }, { name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "hash", type: "string" }],
    name: "acquireVerify",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "partnerNumber",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "addr", type: "address" }],
    name: "partnerAttestsNunber",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "hash", type: "string" }],
    name: "verify",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "partnerList",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "addr", type: "address" },
      { name: "typ", type: "string" }
    ],
    name: "partnerAttestNunberByType",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "i", type: "uint256" }],
    name: "attestByIndex",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" }
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
      { indexed: false, name: "PartnerName", type: "string" },
      { indexed: false, name: "AttestHash", type: "string" }
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
      searchType: "block_height",
      search_content: ""
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.browser_wrap {
  background-color: #040b1c;
  background-image: url('../common/images/bg-top.png'), url('../common/images/bg-bottom.png');
  background-position: top center, top 1080px center;
  background-repeat: no-repeat, repeat-y;
  padding-bottom: 80px;

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
      margin-top: 38px;
      font-size: 0;

      .search_select, .search_ipt, .btn {
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

      .search_select {
        // 清除默认样式
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        width: 176px;
        font-size: 18px;
        line-height: 50px;
        padding-left: 50px;
        border-radius: 25px 0px 0px 0px;
        cursor: pointer;
        background-image: url('../common/images/up.png');
        background-position: top 17px right 15px;
        background-repeat: no-repeat;

        option {
          font-size: 14px;
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
      .count_box {
        width: 1200px;
        margin-top: 242px;
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
            color #222222;
            cursor: pointer;  
            li {
              border-right 1px solid #a0a0a0;
              padding-left 12px
            }
            li:last-child{
              border-right none;
            }
          }
          .info_tb:hover {
            background-color: #00e0dd;
            color #ffffff;
            box-shadow: 0px 3px 7px 0px rgba(0, 198, 255, 0.39);
            li{
              border none
            }
            li:last-child{
              color red
            }
          }
          .info_tb:last-child:hover{
            border-radius: 0px 0px 25px 0px;
          }
        }
      }
    }
  }
}
</style>
