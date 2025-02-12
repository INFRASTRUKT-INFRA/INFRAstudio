export { Chain } from './core/chain';
export { Sequencer } from './core/sequencer';
export * from './types/chain';

// Example usage:
/*
import { Chain } from '@infrastrukt/sdk';

const chain = new Chain({
  name: 'MyL2Chain',
  executionLayer: 'ZK',
  baseChain: 'Ethereum',
  sequencer: 'Decentralized',
  tps: 50000,
  features: {
    privacy: true,
    interop: true,
    dataAvailability: true
  },
  consensus: {
    algorithm: 'PoS',
    blockTime: 2,
    validators: 100
  }
});

await chain.deploy({
  environment: 'testnet',
  autoScale: true,
  monitoring: true
});

const status = await chain.getStatus();
console.log('Chain status:', status);
*/