import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';
import { transactionContainsJitotip } from '../utils/parseTransaction/transactionContainsJitotip';
import { getRelevantInstructions } from '../utils/parseInstruction/getRelevantInstructions';

export const platform: PlatformRaw = {
  id: "jito",
  name: "Jito",
  description: "Earn MEV rewards through Jito's Solana Liquid Staking pool.",
  defiLlamaId: "jito",
  links: {
    website: "https://jito.network/",
    discord: "https://discord.gg/jito",
    twitter: "https://twitter.com/jito_sol",
    github: "https://github.com/jito-foundation",
    medium: "https://medium.com/@Jito-Foundation",
    documentation: "https://www.jito.network/docs/jitosol/overview/",
  },
  tokens: [
    "jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL",
    "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
  ],
  tags: ["tool"],
};

const contract = {
  name: 'Governance',
  address: 'jtogvBNH3WBSWDYD5FJfQP2ZxNTuf82zL8GkEhPeaJx',
  platformId: platform.id,
};

const restakingContract = {
  name: 'Restaking',
  address: 'Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'mERKcfxMC5SqJn4Ld4BUris3WKZZ1ojjWJ3A3J5CKxv',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-governance`,
  name: 'Governance',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const restakingService: ServiceDefinition = {
  id: `${platform.id}-restaking`,
  name: 'Restaking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [restakingContract],
};

const tipService: ServiceDefinition = {
  id: `${platform.id}-tip`,
  name: 'Tip',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);

    return instructions.length === 1 && transactionContainsJitotip(txn);
  },
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [
  service,
  restakingService,
  tipService,
  airdropService,
];
export default services;
