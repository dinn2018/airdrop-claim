// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TEverNFT is ERC721, Ownable {

	address public minter;
	string public baseURL;

    constructor(address owner) ERC721("TNEver","TNEVER")  {
		transferOwnership(owner);
    }

	function transferMinter(address newMinter) external onlyOwner {
		minter = newMinter;
	}
	
	function mint(address to, uint256 tokenId) external onlyMinter {
		_mint(to, tokenId);
	}

	function setBaseURI(string memory baseURI_) external onlyOwner {
		baseURL = baseURI_;
	}

	function _baseURI() internal view override returns (string memory) {
        return baseURL;
    }

	modifier onlyMinter {
		require(msg.sender == minter, "TEverNFT: not minter.");
		_;
	}

}
