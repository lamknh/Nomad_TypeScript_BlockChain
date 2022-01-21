class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "2202020202020", "", "Hello", 123456);

let blockchian: [Block] = [genesisBlock]; // Block만 블록체인에 추가하도록 체크

console.log(blockchian);

export {};