// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract GuestBook {
    event NewNote(address indexed persona, string saludo);

    function addNote(string calldata _saludo) external {
        emit NewNote(msg.sender, _saludo);
    }
}
