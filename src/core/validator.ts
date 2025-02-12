import { z } from 'zod';
import type { ChainConfig, DeploymentOptions } from '../types/chain';

const chainConfigSchema = z.object({
  name: z.string().min(1).max(50),
  executionLayer: z.enum(['ZK', 'Optimistic']),
  baseChain: z.enum(['Ethereum', 'Solana', 'Binance']),
  sequencer: z.enum(['Decentralized', 'Centralized', 'Hybrid']),
  tps: z.number().min(1000).max(100000),
  features: z.object({
    privacy: z.boolean(),
    interop: z.boolean(),
    dataAvailability: z.boolean(),
  }),
  consensus: z.object({
    algorithm: z.string(),
    blockTime: z.number().min(0.1).max(60),
    validators: z.number().min(1).max(1000),
  }),
});

const deploymentOptionsSchema = z.object({
  environment: z.enum(['testnet', 'mainnet']),
  autoScale: z.boolean(),
  monitoring: z.boolean(),
});

export function validateChainConfig(config: ChainConfig): boolean {
  try {
    chainConfigSchema.parse(config);
    return true;
  } catch (error) {
    console.error('Invalid chain configuration:', error);
    return false;
  }
}

export function validateDeploymentOptions(options: DeploymentOptions): boolean {
  try {
    deploymentOptionsSchema.parse(options);
    return true;
  } catch (error) {
    console.error('Invalid deployment options:', error);
    return false;
  }
}