import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "defituna",
  name: "DeFiTuna",
  description: "A comprehensive toolkit for Liquidity Providers",
  links: {
    website: "https://defituna.com",
    discord: "https://discord.gg/vNWwVWbnzs",
    twitter: "https://x.com/DeFiTuna",
    documentation: "https://defituna.gitbook.io/defituna-docs",
  },
  tags: ["dapp", "dex"],
  tokens: ["TUNAfXDZEdQizTMTh3uEvNvYqJmqFHZbEJt8joP4cyx"],
};

const defiTunaContract = {
  name: 'DefiTuna',
  address: 'tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD',
  platformId: 'defituna',
};

const stakingContract = {
  name: 'Staking',
  address: 'tUnst2Y2sbmgSgARBpSBZhqPzpoy2iUsdCwb5ToYVJa',
  platformId: 'defituna',
};

const defiTunaService: ServiceDefinition = {
  id: 'defituna',
  name: 'Lending',
  platformId: 'defituna',
  networkId: NetworkId.solana,
  contracts: [defiTunaContract],
};

const fusionAmmContract = {
  name: 'Fusion AMM',
  address: 'fUSioN9YKKSa3CUC2YUc4tPkHJ5Y6XW1yz8y6F7qWz9',
  platformId: 'defituna',
};

export const stakingService: ServiceDefinition = {
  id: 'defituna-staking',
  name: 'Staking',
  platformId: 'defituna',
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const fusionAmmService: ServiceDefinition = {
  id: 'defituna-fusion-amm',
  name: 'Fusion AMM',
  platformId: 'defituna',
  networkId: NetworkId.solana,
  contracts: [fusionAmmContract],
};

export const services: ServiceDefinition[] = [
  defiTunaService,
  stakingService,
  fusionAmmService,
];
export default services;
