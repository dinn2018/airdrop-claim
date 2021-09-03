import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { MerkleDistributor } from './contracts'
import { toToken } from './utils'

task('claim', 'claim')
	.addParam('index', 'account index')
	.addParam('to', 'address')
	.addParam('amount', 'amount')
	.addParam('proofs', 'proofs')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const merkleDistributor = await MerkleDistributor(env)
		const proofs = String(args.proofs).split(',')
		const tx = await merkleDistributor.claim(
			args.index,
			args.to,
			toToken(args.amount),
			proofs
		)
		console.log('claim', tx)
		const receipt = await tx.wait()
		console.log('receipt', receipt)
	})

task('setRoot', 'setRoot')
	.addParam('root', 'merkle root')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const merkleDistributor = await MerkleDistributor(env)
		const tx = await merkleDistributor.setRoot(args.root)
		console.log('setRoot', tx)
		const receipt = await tx.wait()
		console.log('receipt', receipt)
	})

task('root')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const merkleDistributor = await MerkleDistributor(env)
		const merkleRoot = await merkleDistributor.merkleRoot()
		console.log('merkleRoot', merkleRoot)
	})

task('isClaimed')
	.addParam('index', 'account index')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const merkleDistributor = await MerkleDistributor(env)
		const isClaimed = await merkleDistributor.isClaimed(args.index)
		console.log('isClaimed', isClaimed)
	})

module.exports = {}