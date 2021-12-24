import Blockchain from './blockchain';

const blockchain = new Blockchain();

for(let i=0; i<5; i++) {
    const newData = 'data'+i;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);