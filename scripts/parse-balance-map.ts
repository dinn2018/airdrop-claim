import { BigNumber, utils } from 'ethers'
import BalanceTree from './balance-tree'

const { isAddress, getAddress } = utils

// This is the blob that gets distributed and pinned to IPFS.
// It is completely sufficient for recreating the entire merkle tree.
// Anyone can verify that all air drops are included in the tree,
// and the tree has no additional distributions.
interface MerkleDistributorInfo {
	merkleRoot: string
	tokenTotal: string
	claims: {
		[account: string]: {
			index: number
			amount: string
			proof: string[]
			flags?: {
				[flag: string]: boolean
			}
		}
	}
}

type Format = { [account: string]: { amount: string; } }
type NewFormat = {address: string; amount: string;}

export function parseBalanceMap(balances: Format): MerkleDistributorInfo {
	// if balances are in an old format, process them
	const balancesInNewFormat: NewFormat[] = Object.keys(balances).map(
		(account): NewFormat => ({
			address: account,
			amount: balances[account].amount.toString().startsWith('0x') ? balances[account].amount.toString() : `0x${balances[account].amount.toString()}`
		})
	)

	const dataByAddress = balancesInNewFormat.reduce<{
		[address: string]: { amount: BigNumber}
	}>((memo, { address: account, amount }) => {
		if (!isAddress(account)) {
			throw new Error(`Found invalid address: ${account}`)
		}
		const parsed = getAddress(account)
		if (memo[parsed]) throw new Error(`Duplicate address: ${parsed}`)
		const parsedAmount = BigNumber.from(amount)
		if (parsedAmount.lte(0)) throw new Error(`Invalid amount for account: ${account}`)

		memo[parsed] = { amount: parsedAmount}
		return memo
	}, {})

	const sortedAddresses = Object.keys(dataByAddress).sort()

	// construct a tree
	const tree = new BalanceTree(
		sortedAddresses.map((address) => ({ account: address, amount: dataByAddress[address].amount }))
	)

	// generate claims
	const claims = sortedAddresses.reduce<{
		[address: string]: { amount: string; tokenId:string, index: number; proof: string[]; flags?: { [flag: string]: boolean } }
	}>((memo, address, index) => {
		const { amount } = dataByAddress[address]
		const tokenId = BigNumber.from(index.toString())
		memo[address] = {
			index,
			amount: amount.toHexString(),
			tokenId: tokenId.toHexString(),
			proof: tree.getProof(index, address, amount, tokenId),
		}
		return memo
	}, {})

	const tokenTotal: BigNumber = sortedAddresses.reduce<BigNumber>(
		(memo, key) => memo.add(dataByAddress[key].amount),
		BigNumber.from(0)
	)

	return {
		merkleRoot: tree.getHexRoot(),
		tokenTotal: tokenTotal.toHexString(),
		claims,
	}
}
