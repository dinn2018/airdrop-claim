import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { TEver__factory } from '../types/factories/TEver__factory'
import { MerkleDistributor__factory } from '../types/factories/MerkleDistributor__factory'

export const TEver = async (env: HardhatRuntimeEnvironment) => {
	const deployment = await env.deployments.get(TEver.name)
	const signers = await env.ethers.getSigners()
	return TEver__factory.connect(deployment.address, signers[0])
}

export const MerkleDistributor = async (env: HardhatRuntimeEnvironment) => {
	const deployment = await env.deployments.get(MerkleDistributor.name)
	const signers = await env.ethers.getSigners()
	return MerkleDistributor__factory.connect(deployment.address, signers[0])
}

