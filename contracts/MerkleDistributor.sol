// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';

import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MerkleDistributor {
	IERC20 public immutable token;
	IERC721 public immutable nft;

	bytes32 public merkleRoot;

	bytes4 public immutable mints = bytes4(keccak256('mint(address,uint256)'));

	event Claimed(uint256 index, address account, uint256 amount, uint256 tokenId);

	// This is a packed array of booleans.
	mapping(uint256 => uint256) private claimedBitMap;

	constructor(
		IERC20 token_,
		IERC721 nft_,
		bytes32 merkleRoot_
	) {
		token = token_;
		merkleRoot = merkleRoot_;
		nft = nft_;
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

		uint256 balance = nft.balanceOf(account);
		if (balance == 0) {
			(bool success, ) = address(nft).call(abi.encodeWithSelector(mints, account, tokenId));
			require(success, 'MerkleDistributor: mint nft token failed.');
		}

		emit Claimed(index, account, amount, tokenId);
	}
}
