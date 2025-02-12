import type { BaseChain } from '../types/chain';
import { ethers } from 'ethers';

export class Sequencer {
  private chain: BaseChain;
  private provider: ethers.Provider;
  private queue: Transaction[] = [];

  constructor(chain: BaseChain, rpcUrl: string) {
    this.chain = chain;
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
  }

  async submitTransaction(tx: Transaction): Promise<string> {
    this.queue.push(tx);
    return this.processBatch();
  }

  private async processBatch(): Promise<string> {
    // Mock implementation
    return 'tx_hash_' + Date.now();
  }
}

interface Transaction {
  from: string;
  to: string;
  data: string;
  value: bigint;
  nonce: number;
}