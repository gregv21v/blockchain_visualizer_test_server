const SHA256 = require('crypto-js/sha256')

/**
 * Block - the main unit of a block chain
 * Modified to typescript from https://www.youtube.com/watch?v=zVqczFZr124
 */
class Block {

    /** 
     * constructor() 
     * @description constructs a block for the block chain
     * @param index the index of the block in the blockchain
     * @param timestamp the time when the block was created 
     * @param data the data inside the block
     * @param previousHash the hash that links this block to another block
     */
    constructor(index, timestamp, data, nextBlock, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp
        this.data = data 
        this.previousHash = previousHash
        this.hash = ""
        this._nextBlock = nextBlock
    } 

    /**
     * set nextBlock()
     * @description sets the previous block to another value
     * @param {Block} value the block to set the previous block to.
     */
    set nextBlock(value) {
        this._nextBlock = value;
    }

    /**
     * get nextBlock()
     * @description gets the next block in the chain
     * @returns next block
     */
    get nextBlock() {
        return this._nextBlock;
    }


    /**
     * calculateHash()
     * @description calculates the hash of this block
     */
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
    }


    /**
     * p
     */

}

module.exports = Block