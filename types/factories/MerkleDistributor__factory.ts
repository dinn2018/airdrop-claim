/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleDistributor,
  MerkleDistributorInterface,
} from "../MerkleDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract IERC1155",
        name: "erc1155_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc1155",
    outputs: [
      {
        internalType: "contract IERC1155",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
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
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    name: "setRoot",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610b2d380380610b2d83398101604081905261002f91610053565b6001600160601b0319606093841b8116608052600091909155911b1660a0526100ad565b600080600060608486031215610067578283fd5b835161007281610095565b602085015190935061008381610095565b80925050604084015190509250925092565b6001600160a01b03811681146100aa57600080fd5b50565b60805160601c60a05160601c610a476100e66000396000818161031f0152610432015260008181610255015261046d0152610a476000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063bc197c8111610066578063bc197c81146100fe578063d56022d71461011e578063dab5f34014610133578063f23a6e6114610146578063fc0c546a1461015957610093565b806301ffc9a7146100985780632eb4a7ab146100c15780633e4fcb21146100d65780639e34070f146100eb575b600080fd5b6100ab6100a6366004610795565b610161565b6040516100b891906108eb565b60405180910390f35b6100c961019a565b6040516100b891906108f6565b6100e96100e43660046107bd565b6101a0565b005b6100ab6100f936600461077d565b6103db565b61011161010c366004610629565b61041c565b6040516100b891906108ff565b610126610430565b6040516100b89190610914565b6100e961014136600461077d565b610454565b6101116101543660046106e0565b610459565b61012661046b565b60006001600160e01b0319821663f23a6e6160e01b148061019257506001600160e01b0319821663bc197c8160e01b145b90505b919050565b60005481565b6000868686866040516020016101b99493929190610828565b604051602081830303815290604052805190602001209050610210838380806020026020016040519081016040528093929190818152602001838360200280828437600092018290525054925085915061048f9050565b6102355760405162461bcd60e51b815260040161022c90610928565b60405180910390fd5b61023e8761054a565b60405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb9061028c90899089906004016108d2565b602060405180830381600087803b1580156102a657600080fd5b505af11580156102ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102de9190610756565b6102fa5760405162461bcd60e51b815260040161022c90610969565b60408051600081526020810191829052637921219560e11b9091526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061035c9030908a90899060019060248101610855565b600060405180830381600087803b15801561037657600080fd5b505af115801561038a573d6000803e3d6000fd5b50505050856001600160a01b0316877fd9cb1e2714d65a111c0f20f060176ad657496bd47a3de04ec7c3d4ca232112ac87876040516103ca92919061081a565b60405180910390a350505050505050565b6000806103ea610100846109ac565b905060006103fa610100856109e7565b60009283526001602081905260409093205492901b9182169091149392505050565b63bc197c8160e01b98975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600055565b63f23a6e6160e01b9695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081815b855181101561053f5760008682815181106104bf57634e487b7160e01b600052603260045260246000fd5b602002602001015190508083116105005782816040516020016104e392919061081a565b60405160208183030381529060405280519060200120925061052c565b808360405160200161051392919061081a565b6040516020818303038152906040528051906020012092505b5080610537816109c0565b915050610494565b509092149392505050565b6000610558610100836109ac565b90506000610568610100846109e7565b600092835260016020819052604090932080549390911b9092179091555050565b80356001600160a01b038116811461019557600080fd5b60008083601f8401126105b1578182fd5b50813567ffffffffffffffff8111156105c8578182fd5b60208301915083602080830285010111156105e257600080fd5b9250929050565b60008083601f8401126105fa578182fd5b50813567ffffffffffffffff811115610611578182fd5b6020830191508360208285010111156105e257600080fd5b60008060008060008060008060a0898b031215610644578384fd5b61064d89610589565b975061065b60208a01610589565b9650604089013567ffffffffffffffff80821115610677578586fd5b6106838c838d016105a0565b909850965060608b013591508082111561069b578586fd5b6106a78c838d016105a0565b909650945060808b01359150808211156106bf578384fd5b506106cc8b828c016105e9565b999c989b5096995094979396929594505050565b60008060008060008060a087890312156106f8578182fd5b61070187610589565b955061070f60208801610589565b94506040870135935060608701359250608087013567ffffffffffffffff811115610738578283fd5b61074489828a016105e9565b979a9699509497509295939492505050565b600060208284031215610767578081fd5b81518015158114610776578182fd5b9392505050565b60006020828403121561078e578081fd5b5035919050565b6000602082840312156107a6578081fd5b81356001600160e01b031981168114610776578182fd5b60008060008060008060a087890312156107d5578182fd5b863595506107e560208801610589565b94506040870135935060608701359250608087013567ffffffffffffffff81111561080e578283fd5b61074489828a016105a0565b918252602082015260400190565b93845260609290921b6bffffffffffffffffffffffff191660208401526034830152605482015260740190565b600060018060a01b03808816835260208188168185015286604085015285606085015260a06080850152845191508160a0850152825b828110156108a75785810182015185820160c00152810161088b565b828111156108b8578360c084870101525b5050601f01601f19169190910160c0019695505050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b6001600160e01b031991909116815260200190565b6001600160a01b0391909116815260200190565b60208082526021908201527f4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f666040820152601760f91b606082015260800190565b60208082526023908201527f4d65726b6c654469737472696275746f723a205472616e73666572206661696c60408201526232b21760e91b606082015260800190565b6000826109bb576109bb6109fb565b500490565b60006000198214156109e057634e487b7160e01b81526011600452602481fd5b5060010190565b6000826109f6576109f66109fb565b500690565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220b60ea2ca6f8c2cd1e15b9c92abded7b9bdb850c9aef2d9af30c694fed31e8ff664736f6c63430008000033";

export class MerkleDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token_: string,
    erc1155_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleDistributor> {
    return super.deploy(
      token_,
      erc1155_,
      merkleRoot_,
      overrides || {}
    ) as Promise<MerkleDistributor>;
  }
  getDeployTransaction(
    token_: string,
    erc1155_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_,
      erc1155_,
      merkleRoot_,
      overrides || {}
    );
  }
  attach(address: string): MerkleDistributor {
    return super.attach(address) as MerkleDistributor;
  }
  connect(signer: Signer): MerkleDistributor__factory {
    return super.connect(signer) as MerkleDistributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleDistributorInterface {
    return new utils.Interface(_abi) as MerkleDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleDistributor {
    return new Contract(address, _abi, signerOrProvider) as MerkleDistributor;
  }
}
