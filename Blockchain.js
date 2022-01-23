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
        this.chain = [this.createGenesisBlock()]
    }

    /**
     * createGenesisBlock() 
     * @description creates the first block in the blockchain
     */
    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis Block", "0");
    }


    /** 
     * getLatestBlock()
     * @description gets the latest block in the chain
     */
    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }


    /**
     * addBlock()
     * @description adds a new block to the blockchain
     */
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock)
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