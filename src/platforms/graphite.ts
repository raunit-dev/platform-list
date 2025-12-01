import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "graphite",
  name: "Graphite Protocol",
  links: {
    website: "https://gpstaking.taiyorobotics.com/",
    twitter: "https://x.com/GraphiteProto",
    documentation: "https://solport.gitbook.io/graphite-whitepaper",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: 'Staking',
  address: '7pXE4B9EgsEixnyW6U16dEHXKqaaU3mj63cCMqrPRy1C',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const nftGen1StakingContract = {
  name: 'Taiyo Gen1 Staking',
  address: 'J1gmrCGd1zkmjYpsCRkFCsQQEZohRQLVXN4dVxKvDu1e',
  platformId: platform.id,
};

const nftGen1service: ServiceDefinition = {
  id: `${platform.id}-gen1-staking`,
  name: 'Taiyo Gen1 Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [nftGen1StakingContract],
};

const nftGen2StakingContract = {
  name: 'Taiyo Gen2 Staking',
  address: '5f7ZLHmrtjpiCjM2vhSfbewUyDPZcf8x2RDRYJnyMXxg',
  platformId: platform.id,
};

const nftGen2service: ServiceDefinition = {
  id: `${platform.id}-gen2-staking`,
  name: 'Taiyo Gen2 Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [nftGen2StakingContract],
};

export const services: ServiceDefinition[] = [
  service,
  nftGen1service,
  nftGen2service,
];
export default services;
