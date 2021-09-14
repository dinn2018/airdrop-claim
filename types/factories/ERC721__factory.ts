/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
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
    inputs: [],
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001582380380620015828339810160408190526200003491620001b9565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000273565b828054620000769062000220565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c6200025d565b6040516020601f8401601f19168201810183811183821017156200016457620001646200025d565b60405283825285840181018710156200017b578485fd5b8492505b838310156200019e57858301810151828401820152918201916200017f565b83831115620001af57848185840101525b5095945050505050565b60008060408385031215620001cc578182fd5b82516001600160401b0380821115620001e3578384fd5b620001f1868387016200010e565b9350602085015191508082111562000207578283fd5b5062000216858286016200010e565b9150509250929050565b6002810460018216806200023557607f821691505b602082108114156200025757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6112ff80620002836000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101a8578063b88d4fde146101bb578063c87b56dd146101ce578063e985e9c5146101e1576100cf565b80636352211e1461016d57806370a082311461018057806395d89b41146101a0576100cf565b806301ffc9a7146100d457806306fdde03146100fd578063081812fc14610112578063095ea7b31461013257806323b872dd1461014757806342842e0e1461015a575b600080fd5b6100e76100e2366004610cf3565b6101f4565b6040516100f49190610def565b60405180910390f35b61010561023c565b6040516100f49190610dfa565b610125610120366004610d2b565b6102ce565b6040516100f49190610d9e565b610145610140366004610cca565b61031a565b005b610145610155366004610b89565b6103b2565b610145610168366004610b89565b6103ea565b61012561017b366004610d2b565b610405565b61019361018e366004610b3d565b61043a565b6040516100f4919061118c565b61010561047e565b6101456101b6366004610c90565b61048d565b6101456101c9366004610bc4565b61055b565b6101056101dc366004610d2b565b61059a565b6100e76101ef366004610b57565b61061d565b60006001600160e01b031982166380ac58cd60e01b148061022557506001600160e01b03198216635b5e139f60e01b145b8061023457506102348261064b565b90505b919050565b60606000805461024b90611204565b80601f016020809104026020016040519081016040528092919081815260200182805461027790611204565b80156102c45780601f10610299576101008083540402835291602001916102c4565b820191906000526020600020905b8154815290600101906020018083116102a757829003601f168201915b5050505050905090565b60006102d982610664565b6102fe5760405162461bcd60e51b81526004016102f590611016565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061032582610405565b9050806001600160a01b0316836001600160a01b031614156103595760405162461bcd60e51b81526004016102f5906110fa565b806001600160a01b031661036b610681565b6001600160a01b031614806103875750610387816101ef610681565b6103a35760405162461bcd60e51b81526004016102f590610f26565b6103ad8383610685565b505050565b6103c36103bd610681565b826106f3565b6103df5760405162461bcd60e51b81526004016102f59061113b565b6103ad838383610778565b6103ad8383836040518060200160405280600081525061055b565b6000818152600260205260408120546001600160a01b0316806102345760405162461bcd60e51b81526004016102f590610fcd565b60006001600160a01b0382166104625760405162461bcd60e51b81526004016102f590610f83565b506001600160a01b031660009081526003602052604090205490565b60606001805461024b90611204565b610495610681565b6001600160a01b0316826001600160a01b031614156104c65760405162461bcd60e51b81526004016102f590610ea3565b80600560006104d3610681565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610517610681565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161054f9190610def565b60405180910390a35050565b61056c610566610681565b836106f3565b6105885760405162461bcd60e51b81526004016102f59061113b565b610594848484846108a5565b50505050565b60606105a582610664565b6105c15760405162461bcd60e51b81526004016102f5906110ab565b60006105cb6108d8565b905060008151116105eb5760405180602001604052806000815250610616565b806105f5846108ea565b604051602001610606929190610d6f565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106ba82610405565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006106fe82610664565b61071a5760405162461bcd60e51b81526004016102f590610eda565b600061072583610405565b9050806001600160a01b0316846001600160a01b031614806107605750836001600160a01b0316610755846102ce565b6001600160a01b0316145b806107705750610770818561061d565b949350505050565b826001600160a01b031661078b82610405565b6001600160a01b0316146107b15760405162461bcd60e51b81526004016102f590611062565b6001600160a01b0382166107d75760405162461bcd60e51b81526004016102f590610e5f565b6107e28383836103ad565b6107ed600082610685565b6001600160a01b03831660009081526003602052604081208054600192906108169084906111c1565b90915550506001600160a01b0382166000908152600360205260408120805460019290610844908490611195565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6108b0848484610778565b6108bc84848484610a05565b6105945760405162461bcd60e51b81526004016102f590610e0d565b60408051602081019091526000815290565b60608161090f57506040805180820190915260018152600360fc1b6020820152610237565b8160005b811561093957806109238161123f565b91506109329050600a836111ad565b9150610913565b60008167ffffffffffffffff81111561096257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561098c576020820181803683370190505b5090505b8415610770576109a16001836111c1565b91506109ae600a8661125a565b6109b9906030611195565b60f81b8183815181106109dc57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506109fe600a866111ad565b9450610990565b6000610a19846001600160a01b0316610b20565b15610b1557836001600160a01b031663150b7a02610a35610681565b8786866040518563ffffffff1660e01b8152600401610a579493929190610db2565b602060405180830381600087803b158015610a7157600080fd5b505af1925050508015610aa1575060408051601f3d908101601f19168201909252610a9e91810190610d0f565b60015b610afb573d808015610acf576040519150601f19603f3d011682016040523d82523d6000602084013e610ad4565b606091505b508051610af35760405162461bcd60e51b81526004016102f590610e0d565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610770565b506001949350505050565b3b151590565b80356001600160a01b038116811461023757600080fd5b600060208284031215610b4e578081fd5b61061682610b26565b60008060408385031215610b69578081fd5b610b7283610b26565b9150610b8060208401610b26565b90509250929050565b600080600060608486031215610b9d578081fd5b610ba684610b26565b9250610bb460208501610b26565b9150604084013590509250925092565b60008060008060808587031215610bd9578081fd5b610be285610b26565b93506020610bf1818701610b26565b935060408601359250606086013567ffffffffffffffff80821115610c14578384fd5b818801915088601f830112610c27578384fd5b813581811115610c3957610c3961129a565b604051601f8201601f1916810185018381118282101715610c5c57610c5c61129a565b60405281815283820185018b1015610c72578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610ca2578182fd5b610cab83610b26565b915060208301358015158114610cbf578182fd5b809150509250929050565b60008060408385031215610cdc578182fd5b610ce583610b26565b946020939093013593505050565b600060208284031215610d04578081fd5b8135610616816112b0565b600060208284031215610d20578081fd5b8151610616816112b0565b600060208284031215610d3c578081fd5b5035919050565b60008151808452610d5b8160208601602086016111d8565b601f01601f19169290920160200192915050565b60008351610d818184602088016111d8565b835190830190610d958183602088016111d8565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610de590830184610d43565b9695505050505050565b901515815260200190565b6000602082526106166020830184610d43565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b600082198211156111a8576111a861126e565b500190565b6000826111bc576111bc611284565b500490565b6000828210156111d3576111d361126e565b500390565b60005b838110156111f35781810151838201526020016111db565b838111156105945750506000910152565b60028104600182168061121857607f821691505b6020821081141561123957634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156112535761125361126e565b5060010190565b60008261126957611269611284565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146112c657600080fd5b5056fea26469706673582212208d513dea32db7613e0565ce314798ca2b9e5dc7e6dc6e4500268980a2ba967a364736f6c63430008000033";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
