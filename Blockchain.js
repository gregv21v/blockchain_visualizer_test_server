const Block = require("./Block")

/**
 * Blockchain - a chain of blocks
 * Modified to typescript from https://www.youtube.com/watch?v=zVqczFZr124
 */
class Blockchain {
    /** 
     * constructor()
     * @description constructs the blockchain
     */
    constructor() {
        this._head = this.createGenesisBlock()
        this._length = 1;
    }

    /**
     * createGenesisBlock() 
     * @description creates the first block in the blockchain
     */
    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis Block", null, "0");
    }


    /** 
     * getLatestBlock()
     * @description gets the latest block in the chain
     */
    getLatestBlock() {
        return this.getLastBlock();
    }


    /**
     * addBlock()
     * @description adds a new block to the blockchain
     */
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash();
        this.getLastBlock().nextBlock = newBlock;
        this._length++;
    }


    /**
     * getLastBlockNode() 
     * @description get the last block in the chain
     * @returns the last block
     */
    getLastBlock() {
        let currentNode = this._head;

        // if currentNode and currentNode.next block exist 
        while(currentNode && currentNode.nextBlock) {
            currentNode = currentNode.nextBlock;
        }

        return currentNode;
    }
}

module.exports = Blockchain