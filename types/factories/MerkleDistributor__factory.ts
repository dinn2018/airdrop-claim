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
        internalType: "address",
        name: "token_",
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
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
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
    inputs: [],
    name: "token",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105833803806105838339818101604052604081101561003357600080fd5b5080516020909101516001600160601b031960609290921b9190911660805260005560805160601c61050c61007760003980610242528061039f525061050c6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e7ba6ef1461005c5780632eb4a7ab146100ea5780639e34070f14610104578063dab5f34014610135578063fc0c546a14610152575b600080fd5b6100e86004803603608081101561007257600080fd5b8135916001600160a01b0360208201351691604082013591908101906080810160608201356401000000008111156100a957600080fd5b8201836020820111156100bb57600080fd5b803590602001918460208302840111640100000000831117156100dd57600080fd5b509092509050610176565b005b6100f261036e565b60408051918252519081900360200190f35b6101216004803603602081101561011a57600080fd5b5035610374565b604080519115158252519081900360200190f35b6100e86004803603602081101561014b57600080fd5b5035610398565b61015a61039d565b604080516001600160a01b039092168252519081900360200190f35b600085858560405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040528051906020012090506101fc83838080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492508591506103c19050565b6102375760405162461bcd60e51b81526004018080602001828103825260218152602001806104936021913960400191505060405180910390fd5b6102408661046a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb86866040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156102b757600080fd5b505af11580156102cb573d6000803e3d6000fd5b505050506040513d60208110156102e157600080fd5b505161031e5760405162461bcd60e51b81526004018080602001828103825260238152602001806104b46023913960400191505060405180910390fd5b604080518781526001600160a01b038716602082015280820186905290517f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed0269181900360600190a1505050505050565b60005481565b610100810460009081526001602081905260409091205460ff9092161b9081161490565b600055565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081815b855181101561045f5760008682815181106103dd57fe5b602002602001015190508083116104245782816040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250610456565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b506001016103c6565b509092149392505050565b61010081046000908152600160208190526040909120805460ff9093169190911b909117905556fe4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e4d65726b6c654469737472696275746f723a205472616e73666572206661696c65642ea2646970667358221220bde84a57b82a8e5b88e8d82c83787e73aa83abeab0059dccff6ac11c56ee01be64736f6c63430007030033";

export class MerkleDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleDistributor> {
    return super.deploy(
      token_,
      merkleRoot_,
      overrides || {}
    ) as Promise<MerkleDistributor>;
  }
  getDeployTransaction(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, merkleRoot_, overrides || {});
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
