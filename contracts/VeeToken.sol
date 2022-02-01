// SPDX-License-Identifier: FTL
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VeeToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("My Vee Token", "VEE") {
        _mint(msg.sender, initialSupply);
    }
}