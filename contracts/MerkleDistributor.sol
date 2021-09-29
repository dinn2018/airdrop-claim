// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol';
import '@openzeppelin/contracts/utils/introspection/IERC165.sol';

import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MerkleDistributor is IERC1155Receiver {
	IERC20 public immutable token;
	IERC1155 public immutable erc1155;

	bytes32 public merkleRoot;

	bytes4 public immutable mints = bytes4(keccak256('mint(address,uint256)'));

	event Claimed(uint256 index, address account, uint256 amount, uint256 tokenId);

	// This is a packed array of booleans.
	mapping(uint256 => uint256) private claimedBitMap;

	constructor(
		IERC20 token_,
		IERC1155 erc1155_,
		bytes32 merkleRoot_
	) {
		token = token_;
		merkleRoot = merkleRoot_;
		erc1155 = erc1155_;
	}

	function setRoot(bytes32 merkleRoot_) external {
		merkleRoot = merkleRoot_;
	}

	function isClaimed(uint256 index) public view returns (bool) {
		uint256 claimedWordIndex = index / 256;
		uint256 claimedBitIndex = index % 256;
		uint256 claimedWord = claimedBitMap[claimedWordIndex];
		uint256 mask = (1 << claimedBitIndex);
		return claimedWord & mask == mask;
	}

	function _setClaimed(uint256 index) private {
		uint256 claimedWordIndex = index / 256;
		uint256 claimedBitIndex = index % 256;
		claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);
	}

	function claim(
		uint256 index,
		address account,
		uint256 amount,
		uint256 tokenId,
		bytes32[] calldata merkleProof
	) external {
		// require(!isClaimed(index), "MerkleDistributor: Drop already claimed.");
		// Verify the merkle proof.
		bytes32 node = keccak256(abi.encodePacked(index, account, amount, tokenId));
		require(MerkleProof.verify(merkleProof, merkleRoot, node), 'MerkleDistributor: Invalid proof.');

		// Mark it claimed and send the token.
		_setClaimed(index);

		require(IERC20(token).transfer(account, amount), 'MerkleDistributor: Transfer failed.');
		erc1155.safeTransferFrom(address(this), account, 0, 1, new bytes(0));

		emit Claimed(index, account, amount, tokenId);
	}

	 function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external override returns (bytes4) {
		return IERC1155Receiver.onERC1155Received.selector;
	}

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external override returns (bytes4) {
		return IERC1155Receiver.onERC1155BatchReceived.selector;
	}

	function supportsInterface(bytes4 interfaceId) external view override returns (bool) {
		return interfaceId == IERC1155Receiver.onERC1155Received.selector || interfaceId == IERC1155Receiver.onERC1155BatchReceived.selector;
	}
}
