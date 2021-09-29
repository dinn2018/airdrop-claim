/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TEver1155, TEver1155Interface } from "../TEver1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052601360808190527f544576657231313535206f6e206d756d6261690000000000000000000000000060a0908152620000409160059190620001a9565b503480156200004e57600080fd5b50604051620022ac380380620022ac83398101604081905262000071916200024f565b806200007d81620000a5565b50620000926200008c620000be565b620000c2565b6200009d8262000114565b50506200040f565b8051620000ba906002906020840190620001a9565b5050565b3390565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200011e620000be565b6001600160a01b0316620001316200019a565b6001600160a01b031614620001635760405162461bcd60e51b81526004016200015a9062000387565b60405180910390fd5b6001600160a01b0381166200018c5760405162461bcd60e51b81526004016200015a9062000341565b6200019781620000c2565b50565b6004546001600160a01b031690565b828054620001b790620003bc565b90600052602060002090601f016020900481019282620001db576000855562000226565b82601f10620001f657805160ff191683800117855562000226565b8280016001018555821562000226579182015b828111156200022657825182559160200191906001019062000209565b506200023492915062000238565b5090565b5b8082111562000234576000815560010162000239565b6000806040838503121562000262578182fd5b82516001600160a01b038116811462000279578283fd5b602084810151919350906001600160401b038082111562000298578384fd5b818601915086601f830112620002ac578384fd5b815181811115620002c157620002c1620003f9565b604051601f8201601f1916810185018381118282101715620002e757620002e7620003f9565b6040528181528382018501891015620002fe578586fd5b8592505b8183101562000321578383018501518184018601529184019162000302565b818311156200033257858583830101525b80955050505050509250929050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600281046001821680620003d157607f821691505b60208210811415620003f357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611e8d806200041f6000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063715018a611610097578063bd85b03911610066578063bd85b03914610213578063e985e9c514610226578063f242432a14610239578063f2fde38b1461024c576100ff565b8063715018a6146101d0578063731133e9146101d85780638da5cb5b146101eb578063a22cb46514610200576100ff565b80630e89341c116100d35780630e89341c146101775780632eb2c2d61461018a5780634e1273f41461019d5780634f558e79146101bd576100ff565b8062fdd58e1461010457806301ffc9a71461012d57806302fe53051461014d57806306fdde0314610162575b600080fd5b61011761011236600461146a565b61025f565b6040516101249190611c12565b60405180910390f35b61014061013b3660046115e0565b6102b6565b6040516101249190611803565b61016061015b366004611618565b6102fe565b005b61016a610349565b604051610124919061180e565b61016a61018536600461165e565b6103d7565b610160610198366004611327565b61045d565b6101b06101ab366004611522565b6104bb565b60405161012491906117c2565b6101406101cb36600461165e565b6105db565b6101606105ee565b6101606101e6366004611493565b610639565b6101f36106ba565b604051610124919061170b565b61016061020e366004611430565b6106ca565b61011761022136600461165e565b610798565b6101406102343660046112f5565b6107aa565b6101606102473660046113cd565b6107d8565b61016061025a3660046112db565b61082f565b60006001600160a01b0383166102905760405162461bcd60e51b815260040161028790611907565b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806102e757506001600160e01b031982166303a24d0760e21b145b806102f657506102f68261089d565b90505b919050565b6103066108b6565b6001600160a01b03166103176106ba565b6001600160a01b03161461033d5760405162461bcd60e51b815260040161028790611ac2565b610346816108ba565b50565b6005805461035690611cea565b80601f016020809104026020016040519081016040528092919081815260200182805461038290611cea565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b505050505081565b60606103e2826105db565b6103fe5760405162461bcd60e51b8152600401610287906118bd565b6000610409836108d1565b511161042457604051806020016040528060008152506102f6565b61042d826108d1565b61043683610965565b6040516020016104479291906116dc565b6040516020818303038152906040529050919050565b6104656108b6565b6001600160a01b0316856001600160a01b0316148061048b575061048b856102346108b6565b6104a75760405162461bcd60e51b815260040161028790611a26565b6104b48585858585610a88565b5050505050565b606081518351146104de5760405162461bcd60e51b815260040161028790611b40565b6000835167ffffffffffffffff81111561050857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610531578160200160208202803683370190505b50905060005b84518110156105d35761059885828151811061056357634e487b7160e01b600052603260045260246000fd5b602002602001015185838151811061058b57634e487b7160e01b600052603260045260246000fd5b602002602001015161025f565b8282815181106105b857634e487b7160e01b600052603260045260246000fd5b60209081029190910101526105cc81611d25565b9050610537565b509392505050565b6000806105e783610798565b1192915050565b6105f66108b6565b6001600160a01b03166106076106ba565b6001600160a01b03161461062d5760405162461bcd60e51b815260040161028790611ac2565b6106376000610c59565b565b6106416108b6565b6001600160a01b03166106526106ba565b6001600160a01b0316146106785760405162461bcd60e51b815260040161028790611ac2565b6104b485858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cab92505050565b6004546001600160a01b03165b90565b816001600160a01b03166106dc6108b6565b6001600160a01b031614156107035760405162461bcd60e51b815260040161028790611af7565b80600160006107106108b6565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556107546108b6565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161078c9190611803565b60405180910390a35050565b60009081526003602052604090205490565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6107e06108b6565b6001600160a01b0316856001600160a01b031614806108065750610806856102346108b6565b6108225760405162461bcd60e51b815260040161028790611998565b6104b48585858585610ce0565b6108376108b6565b6001600160a01b03166108486106ba565b6001600160a01b03161461086e5760405162461bcd60e51b815260040161028790611ac2565b6001600160a01b0381166108945760405162461bcd60e51b815260040161028790611952565b61034681610c59565b6001600160e01b031981166301ffc9a760e01b14919050565b3390565b80516108cd906002906020840190611141565b5050565b6060600280546108e090611cea565b80601f016020809104026020016040519081016040528092919081815260200182805461090c90611cea565b80156109595780601f1061092e57610100808354040283529160200191610959565b820191906000526020600020905b81548152906001019060200180831161093c57829003601f168201915b50505050509050919050565b60608161098a57506040805180820190915260018152600360fc1b60208201526102f9565b8160005b81156109b4578061099e81611d25565b91506109ad9050600a83611c8f565b915061098e565b60008167ffffffffffffffff8111156109dd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a07576020820181803683370190505b5090505b8415610a8057610a1c600183611ca3565b9150610a29600a86611d40565b610a34906030611c77565b60f81b818381518110610a5757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610a79600a86611c8f565b9450610a0b565b949350505050565b8151835114610aa95760405162461bcd60e51b815260040161028790611b89565b6001600160a01b038416610acf5760405162461bcd60e51b8152600401610287906119e1565b6000610ad96108b6565b9050610ae9818787878787610c51565b60005b8451811015610beb576000858281518110610b1757634e487b7160e01b600052603260045260246000fd5b602002602001015190506000858381518110610b4357634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610b935760405162461bcd60e51b815260040161028790611a78565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610bd0908490611c77565b9250508190555050505080610be490611d25565b9050610aec565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610c3b9291906117d5565b60405180910390a4610c51818787878787610e23565b505050505050565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610cb784848484610f31565b60008381526003602052604081208054849290610cd5908490611c77565b909155505050505050565b6001600160a01b038416610d065760405162461bcd60e51b8152600401610287906119e1565b6000610d106108b6565b9050610d30818787610d2188611011565b610d2a88611011565b87610c51565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610d715760405162461bcd60e51b815260040161028790611a78565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610dae908490611c77565b92505081905550856001600160a01b0316876001600160a01b0316836001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051610e04929190611c1b565b60405180910390a4610e1a82888888888861106a565b50505050505050565b610e35846001600160a01b031661113b565b15610c515760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610e6e908990899088908890889060040161171f565b602060405180830381600087803b158015610e8857600080fd5b505af1925050508015610eb8575060408051601f3d908101601f19168201909252610eb5918101906115fc565b60015b610f0157610ec4611d9c565b80610ecf5750610ee9565b8060405162461bcd60e51b8152600401610287919061180e565b60405162461bcd60e51b815260040161028790611821565b6001600160e01b0319811663bc197c8160e01b14610e1a5760405162461bcd60e51b815260040161028790611875565b6001600160a01b038416610f575760405162461bcd60e51b815260040161028790611bd1565b6000610f616108b6565b9050610f7381600087610d2188611011565b6000848152602081815260408083206001600160a01b038916845290915281208054859290610fa3908490611c77565b92505081905550846001600160a01b031660006001600160a01b0316826001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051610ffa929190611c1b565b60405180910390a46104b48160008787878761106a565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061105957634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b61107c846001600160a01b031661113b565b15610c515760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906110b5908990899088908890889060040161177d565b602060405180830381600087803b1580156110cf57600080fd5b505af19250505080156110ff575060408051601f3d908101601f191682019092526110fc918101906115fc565b60015b61110b57610ec4611d9c565b6001600160e01b0319811663f23a6e6160e01b14610e1a5760405162461bcd60e51b815260040161028790611875565b3b151590565b82805461114d90611cea565b90600052602060002090601f01602090048101928261116f57600085556111b5565b82601f1061118857805160ff19168380011785556111b5565b828001600101855582156111b5579182015b828111156111b557825182559160200191906001019061119a565b506111c19291506111c5565b5090565b5b808211156111c157600081556001016111c6565b600067ffffffffffffffff8311156111f4576111f4611d80565b611207601f8401601f1916602001611c29565b905082815283838301111561121b57600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b03811681146102f957600080fd5b600082601f830112611259578081fd5b8135602061126e61126983611c53565b611c29565b828152818101908583018385028701840188101561128a578586fd5b855b858110156112a85781358452928401929084019060010161128c565b5090979650505050505050565b600082601f8301126112c5578081fd5b6112d4838335602085016111da565b9392505050565b6000602082840312156112ec578081fd5b6112d482611232565b60008060408385031215611307578081fd5b61131083611232565b915061131e60208401611232565b90509250929050565b600080600080600060a0868803121561133e578081fd5b61134786611232565b945061135560208701611232565b9350604086013567ffffffffffffffff80821115611371578283fd5b61137d89838a01611249565b94506060880135915080821115611392578283fd5b61139e89838a01611249565b935060808801359150808211156113b3578283fd5b506113c0888289016112b5565b9150509295509295909350565b600080600080600060a086880312156113e4578081fd5b6113ed86611232565b94506113fb60208701611232565b93506040860135925060608601359150608086013567ffffffffffffffff811115611424578182fd5b6113c0888289016112b5565b60008060408385031215611442578182fd5b61144b83611232565b91506020830135801515811461145f578182fd5b809150509250929050565b6000806040838503121561147c578182fd5b61148583611232565b946020939093013593505050565b6000806000806000608086880312156114aa578081fd5b6114b386611232565b94506020860135935060408601359250606086013567ffffffffffffffff808211156114dd578283fd5b818801915088601f8301126114f0578283fd5b8135818111156114fe578384fd5b89602082850101111561150f578384fd5b9699959850939650602001949392505050565b60008060408385031215611534578182fd5b823567ffffffffffffffff8082111561154b578384fd5b818501915085601f83011261155e578384fd5b8135602061156e61126983611c53565b82815281810190858301838502870184018b101561158a578889fd5b8896505b848710156115b35761159f81611232565b83526001969096019591830191830161158e565b50965050860135925050808211156115c9578283fd5b506115d685828601611249565b9150509250929050565b6000602082840312156115f1578081fd5b81356112d481611e41565b60006020828403121561160d578081fd5b81516112d481611e41565b600060208284031215611629578081fd5b813567ffffffffffffffff81111561163f578182fd5b8201601f8101841361164f578182fd5b610a80848235602084016111da565b60006020828403121561166f578081fd5b5035919050565b6000815180845260208085019450808401835b838110156116a557815187529582019590820190600101611689565b509495945050505050565b600081518084526116c8816020860160208601611cba565b601f01601f19169290920160200192915050565b600083516116ee818460208801611cba565b835190830190611702818360208801611cba565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0386811682528516602082015260a06040820181905260009061174b90830186611676565b828103606084015261175d8186611676565b9050828103608084015261177181856116b0565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906117b7908301846116b0565b979650505050505050565b6000602082526112d46020830184611676565b6000604082526117e86040830185611676565b82810360208401526117fa8185611676565b95945050505050565b901515815260200190565b6000602082526112d460208301846116b0565b60208082526034908201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356040820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606082015260800190565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6020808252602a908201527f5445766572313135353a2055524920717565727920666f72206e6f6e657869736040820152693a32b73a103a37b5b2b760b11b606082015260800190565b6020808252602b908201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60408201526a65726f206164647265737360a81b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526032908201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206040820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604082015268103337b91039b2b63360b91b606082015260800190565b60208082526029908201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604082015268040dad2e6dac2e8c6d60bb1b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715611c4b57611c4b611d80565b604052919050565b600067ffffffffffffffff821115611c6d57611c6d611d80565b5060209081020190565b60008219821115611c8a57611c8a611d54565b500190565b600082611c9e57611c9e611d6a565b500490565b600082821015611cb557611cb5611d54565b500390565b60005b83811015611cd5578181015183820152602001611cbd565b83811115611ce4576000848401525b50505050565b600281046001821680611cfe57607f821691505b60208210811415611d1f57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611d3957611d39611d54565b5060010190565b600082611d4f57611d4f611d6a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60e01c90565b600060443d1015611dac576106c7565b600481823e6308c379a0611dc08251611d96565b14611dca576106c7565b6040513d600319016004823e80513d67ffffffffffffffff8160248401118184111715611dfa57505050506106c7565b82840192508251915080821115611e1457505050506106c7565b503d83016020828401011115611e2c575050506106c7565b601f01601f1916810160200160405291505090565b6001600160e01b03198116811461034657600080fdfea2646970667358221220d14c25d20ad49fe90dcd6e69b36c928032847f69ae771947715474e5f9ccfa3664736f6c63430008000033";

export class TEver1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    owner: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TEver1155> {
    return super.deploy(owner, _uri, overrides || {}) as Promise<TEver1155>;
  }
  getDeployTransaction(
    owner: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, _uri, overrides || {});
  }
  attach(address: string): TEver1155 {
    return super.attach(address) as TEver1155;
  }
  connect(signer: Signer): TEver1155__factory {
    return super.connect(signer) as TEver1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TEver1155Interface {
    return new utils.Interface(_abi) as TEver1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TEver1155 {
    return new Contract(address, _abi, signerOrProvider) as TEver1155;
  }
}
