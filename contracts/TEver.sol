// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TEver is ERC20 {
	constructor(address minter) ERC20('T-4Ever', 'T-4Ever') {
		_mint(minter, 0x0eea9a8a5be72452780000);
	}
}
