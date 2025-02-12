export type ExecutionLayer = 'ZK' | 'Optimistic';
export type BaseChain = 'Ethereum' | 'Solana' | 'Binance';
export type SequencerType = 'Decentralized' | 'Centralized' | 'Hybrid';

export interface ChainConfig {
  name: string;
  executionLayer: ExecutionLayer;
  baseChain: BaseChain;
  sequencer: SequencerType;
  tps: number;
  features: {
    privacy: boolean;
    interop: boolean;
    dataAvailability: boolean;
  };
  consensus: {
    algorithm: string;
    blockTime: number;
    validators: number;
  };
}

export interface DeploymentOptions {
  environment: 'testnet' | 'mainnet';
  autoScale: boolean;
  monitoring: boolean;
}

export interface ChainStatus {
  status: 'active' | 'inactive' | 'deploying' | 'error';
  blockHeight: number;
  tps: number;
  latency: number;
  uptime: number;
}