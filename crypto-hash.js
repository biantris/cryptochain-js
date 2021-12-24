import { createHash } from 'crypto';

const cryptoHash =(...inputs) => {
    const hash = createHash('sha256');
    hash.update(inputs.sort().join(' '));
    return hash.digest('hex');
}

export default cryptoHash;