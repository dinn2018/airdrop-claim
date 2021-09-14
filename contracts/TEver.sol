// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TEver is ERC20 {

    constructor (address minter) ERC20("TEver","TEVER")  {
		_mint(minter, 5e10*1e18);
    }

}
