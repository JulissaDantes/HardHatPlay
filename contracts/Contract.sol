//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Contract {
  uint public x;

  function updateX(uint _x) public {
    x = _x;
  }

}
