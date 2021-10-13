// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';

contract TEver1155 is ERC1155Supply, Ownable {

	string public name = 'TEver';

	struct Meta {
		bool minted;
		string uri;
	}

	mapping(uint256 => Meta) public meta;

	event PermanentURI(string _value, uint256 indexed _id);

	constructor(address owner) ERC1155('') {
		transferOwnership(owner);
	}

	function mint(
		address to,
		uint256 tokenId,
		uint256 amount,
		string memory metaUri,
		bytes calldata data
	) external onlyOwner {
		require(!meta[tokenId].minted, 'TEver1155: token has been mint');

		_mint(to, tokenId, amount, data);
		meta[tokenId] = Meta(true, metaUri);

		emit PermanentURI(metaUri, tokenId);
	}

	function setTokenUri(uint256 tokenId, string memory uri_) external onlyOwner {
		meta[tokenId].uri = uri_;
	}

	function uri(uint256 tokenId) public view override returns (string memory) {
		require(exists(tokenId), 'TEver1155: URI query for nonexistent token');
		return meta[tokenId].uri;
	}

}
