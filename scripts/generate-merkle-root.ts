import fs from 'fs'
import { parseBalanceMap } from './parse-balance-map'
import { resolve } from 'path'
import { Command } from 'commander'

const program = new Command()

program
	.version('0.0.0')
	.option('-i, --input <path>', 'input JSON file location containing a map of account addresses to string balances')

program.parse(process.argv)

const options = program.opts()

const json = JSON.parse(fs.readFileSync(options.input, { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')

fs.writeFileSync(
	resolve(__dirname, 'result.json'), 
	JSON.stringify(parseBalanceMap(json))
)
console.log('ok')