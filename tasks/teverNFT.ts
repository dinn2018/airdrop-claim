import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { TEverNFT } from './contracts'

task('nft:balanceOf', 'balanceOf')
	.addParam('to', 'address')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const tever = await TEverNFT(env)
		const balanceOf = await tever.balanceOf(
			args.to
		)
		console.log('balanceOf', balanceOf.toString())
	})

module.exports = {}