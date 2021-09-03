import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { TEver } from './contracts'
import { toToken } from './utils'

task('TEver:balanceOf', 'balanceOf')
	.addParam('to', 'address')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const tever = await TEver(env)
		const balanceOf = await tever.balanceOf(
			args.to
		)
		console.log('balanceOf', balanceOf.toString())
	})

task('TEver:transfer', 'transfer')
	.addParam('to', 'address')
	.addParam('amount', 'amount')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const tever = await TEver(env)
		const tx = await tever.transfer(
			args.to,
			toToken(args.amount)
		)
		const receipt = await tx.wait()
		console.log('receipt', receipt)
	})

module.exports = {}