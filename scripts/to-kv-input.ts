
import fs from 'fs'
import axios from 'axios'
import { Command } from 'commander'

const BATCH_SIZE = 10_000

const program = new Command()

program
	.version('0.0.0')
	.requiredOption('-i, --input <path>', 'input JSON file location containing a claims tree')
	.requiredOption('-c, --chain-id <number>', 'chain ID of the merkle kv root')
	.requiredOption('-t, --token <string>', 'Cloudflare API token')
	.requiredOption('-a, --account-identifier <string>', 'Cloudflare account identifier')
	.requiredOption('-n, --namespace-identifier <string>', 'Cloudflare KV namespace identifier')

program.parse(process.argv)
const options = program.opts()

const json = JSON.parse(fs.readFileSync(options.input, { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')

async function main() {
	const KV = Object.keys(json.claims).map((account) => {
		const claim = json.claims[account]
		return {
			key: `${options.chainId}:${account}`,
			value: JSON.stringify(claim),
		}
	})

	let i = 0
	while (i < KV.length) {
		await axios
			.put(
				`https://api.cloudflare.com/client/v4/accounts/${options.accountIdentifier}/storage/kv/namespaces/${options.namespaceIdentifier}/bulk`,
				JSON.stringify(KV.slice(i, (i += BATCH_SIZE))),
				{
					maxBodyLength: Infinity,
					headers: { Authorization: `Bearer ${options.token}`, 'Content-Type': 'application/json' },
				}
			)
			.then((response) => {
				if (!response.data.success) {
					throw Error(response.data.errors)
				}
			})

		console.log(`Uploaded ${i} records in total`)
	}
}

main()
