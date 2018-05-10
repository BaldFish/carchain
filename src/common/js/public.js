var baseURL="https://wallet-api.launchain.cn";
var baseContract = "0x4D65E4D6151BA154Cd9Bf0Fb21b01884e6C2F130";
var baseABI= [
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
export {baseURL, baseContract,baseABI}
