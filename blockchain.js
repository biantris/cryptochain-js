import { genesis, mineBlock } from './block';

class Blockchain {

    constructor() {
        this.chain = [genesis()];
    }

    addBlock({ data }) {
        const newBlock = mineBlock({
            lastBlock: this.chain[this.chain.length-1],
            data
        });

        this.chain.push(newBlock);
    }
}

export default Blockchain;