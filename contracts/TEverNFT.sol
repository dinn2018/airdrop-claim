// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TEverNFT is ERC721, Ownable {

	address public minter;

    constructor(address owner) ERC721("TEver","TEVER")  {
		transferOwnership(owner);
    }

	function transferMinter(address newMinter) external onlyOwner {
		minter = newMinter;
	}
	
	function mint(address to, uint256 tokenId) external onlyMinter {
		_mint(to, tokenId);
	}

	function setBaseURI(string memory baseURI) external onlyOwner {
		_setBaseURI(baseURI);
	}

	function setTokenURI(uint256 tokenId, string memory tokenURI) external onlyOwner {
		_setTokenURI(tokenId, tokenURI);
	}

	modifier onlyMinter {
		require(msg.sender == minter, "TEverNFT: only minter is allowed to mint.");
		_;
	}
}
