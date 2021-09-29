// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract TEver1155 is ERC1155Supply, Ownable {
	using Strings for uint256;
	string public name = 'TEver1155 on mumbai';

	constructor(address owner, string memory _uri) ERC1155(_uri) {
		transferOwnership(owner);
	}

	function mint(
		address to,
		uint256 tokenId,
		uint256 amount,
		bytes calldata data
	) external onlyOwner {
		_mint(to, tokenId, amount, data);
	}

	function setURI(string memory _uri) external onlyOwner {
		super._setURI(_uri);
	}

	function uri(uint256 tokenId) public view override returns (string memory) {
		require(exists(tokenId), 'TEver1155: URI query for nonexistent token');
		return bytes(super.uri(tokenId)).length > 0 ? string(abi.encodePacked(super.uri(tokenId), tokenId.toString())) : '';
	}
}
