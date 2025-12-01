import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';
import {
  addressLookupTableContract,
  singleValidatorStakePoolContract,
  solanaStakePoolContract,
  solanaStakingContract,
} from './solana/contracts';
import { instructionMatch } from '../utils/parseInstruction/instructionMatch';
import { getRelevantInstructions } from '../utils/parseInstruction/getRelevantInstructions';
import {
  instructionIsBurn,
  instructionIsClose,
  instructionIsCreate,
  instructionIsDelegate,
} from '../utils/parseInstruction/instructionIs';
import transactionIsTransfer from '../utils/parseTransaction/transactionIsTransfer';

export const platform: PlatformRaw = {
  id: "solana",
  name: "Solana",
  description:
    "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  links: {
    website: "https://solana.com/",
    discord: "https://solana.com/discord",
    telegram: "https://solana.com/telegram",
    twitter: "https://solana.com/twitter",
    github: "https://solana.com/github",
    documentation: "https://solana.com/docs",
  },
  tags: ["dapp"],
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-stake`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solanaStakingContract],
};

const stakePoolService: ServiceDefinition = {
  id: `${platform.id}-stake-pool`,
  name: 'Stake Pool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solanaStakePoolContract],
};

const singleValidatorStakePoolService: ServiceDefinition = {
  id: `${platform.id}-single-validator-stake-pool`,
  name: 'Single-Validator Stake Pool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [singleValidatorStakePoolContract],
};

const closeAccountService: ServiceDefinition = {
  id: `${platform.id}-close`,
  name: 'Close Token Account',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);
    return instructions.length === 1 && instructionIsClose(instructions[0]);
  },
};

const createAccountService: ServiceDefinition = {
  id: `${platform.id}-token-account`,
  name: 'Token Account',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);

    return instructions.length === 1 && instructionIsCreate(instructions[0]);
  },
};

const addressLookupTableService: ServiceDefinition = {
  id: `${platform.id}-address-lookup-table`,
  name: 'Address Lookup Table',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);
    return (
      instructions.length === 1 &&
      instructionMatch(instructions[0], [addressLookupTableContract.address])
    );
  },
};

const transferService: ServiceDefinition = {
  id: `${platform.id}-transfer`,
  name: 'Transfer',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: transactionIsTransfer,
};

const burnService: ServiceDefinition = {
  id: `${platform.id}-burn`,
  name: 'Burn',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);

    return instructions.length === 1 && instructionIsBurn(instructions[0]);
  },
};

const delegateService: ServiceDefinition = {
  id: `${platform.id}-delegate`,
  name: 'Delegate',
  platformId: platform.id,
  networkId: NetworkId.solana,
  priority: ServicePriority.low,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);

    return instructions.length === 1 && instructionIsDelegate(instructions[0]);
  },
};

export const services: ServiceDefinition[] = [
  stakingService,
  stakePoolService,
  createAccountService,
  closeAccountService,
  addressLookupTableService,
  transferService,
  burnService,
  delegateService,
  singleValidatorStakePoolService,
];
export default services;
