// SPDX-License-Identifier: MIT
pragma solidity = 0.8.17;

import "./interfaces/IRouter.sol";

contract Router is IRouter {

    function _addLiquidity(
        address tokenA,
        address tokenB
    ) internal returns(uint amountA, uint AmountB) {
        
    }

    function addLiquidity(
        address tokenA,
        address tokenB
    ) external returns(uint amountA, uint amountB) {
        (amountA, amountB) = _addLiquidity(tokenA, tokenB);
    }
}