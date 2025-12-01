import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "vidar",
  name: "Vidar",
  links: {
    website: "https://www.vidar.finance/dashboard",
  },
  tokens: [
    "K3UfGb8Cr6g2K4GKFEQFxHRhUMq9E9tb3vWepCf1jUp",
    "7V2ZDLCxZPvx5m5cuexseBHWBMkpj3rfLMuPsuVkecDA",
  ],
  tags: ["dapp"],
};

const nokContract = {
  name: 'wNOK Minter',
  address: 'sta1L8xffHa3K1puWcTX1m4QWHek4Gs8PJZQtGEFwmX',
  platformId: platform.id,
};

const ljupMinterContract = {
  name: 'LJUP Minter',
  address: '1juPgnkY3i9dGkcuZahmby3exN4qpoq5HZ7rKKZsKtA',
  platformId: platform.id,
};

const safeLaunchContract = {
  name: 'SafeLaunch',
  address: 'SAFEuracFxm3sZfhUNtComzcyS4RTkcNccbkWWb4PH5',
  platformId: platform.id,
};

const stakingContract = {
  name: 'BGLD Staking',
  address: 'BStkNZqnbLCmZWs52BcJVNiG3XMwoiS1DuwnGg4ZQrrC',
  platformId: platform.id,
};

const minerContract = {
  name: 'BGLD Miner',
  address: 'BGLDbLHXzZEKvZX2PAkvSChWtZYySZ16Drj6NX247AfY',
  platformId: platform.id,
};

const ljupService: ServiceDefinition = {
  id: `${platform.id}-ljup`,
  name: 'LJUP Minter',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [ljupMinterContract],
};

const nokService: ServiceDefinition = {
  id: `${platform.id}-wNOK`,
  name: 'wNOK Minter',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [nokContract],
};

const safeLaunchService: ServiceDefinition = {
  id: `${platform.id}-safe-launch`,
  name: 'SafeLaunch',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [safeLaunchContract],
};

const bgldStakingService: ServiceDefinition = {
  id: `${platform.id}-bgld-staking`,
  name: 'BGLD Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const bgldMinerService: ServiceDefinition = {
  id: `${platform.id}-bgld-miner`,
  name: 'BGLD Miner',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [minerContract],
};

export const services: ServiceDefinition[] = [
  nokService,
  ljupService,
  safeLaunchService,
  bgldStakingService,
  bgldMinerService,
];
export default services;
