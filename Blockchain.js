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


    /** 
     * isChainValid()
     * @description determines if the blockchain is valid
     */
    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1]
            
            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if(currentBlock.previousHash !== previousBlock._hash) {
                return false;
            }
        }
        return true;
    }

}

module.exports = Blockchain