// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

    // Public variables to store token details
    string public tokenName = "MyToken";
    string public tokenAbbrv = "MTK";
    uint256 public totalSupply;

    // Mapping to store balances of addresses
    mapping(address => uint256) public balances;

    // Mint function to increase total supply and address balance
    function mint(address _to, uint256 _value) public {
        totalSupply += _value;            // Increase total supply
        balances[_to] += _value;          // Increase the balance of the recipient
    }

    // Burn function to decrease total supply and address balance
    function burn(address _from, uint256 _value) public {
        require(balances[_from] >= _value, "Insufficient balance to burn"); // Check balance
        totalSupply -= _value;            // Decrease total supply
        balances[_from] -= _value;        // Decrease the balance of the sender
    }
}
