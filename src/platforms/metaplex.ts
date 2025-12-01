import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "metaplex",
  name: "Metaplex",
  description: "Build decentralizedapplications on Solana and the SVM",
  links: {
    website: "https://metaplex.com",
    discord: "https://discord.gg/metaplex",
    twitter: "https://x.com/metaplex",
    github: "https://github.com/metaplex-foundation",
    documentation: "https://www.metaplex.com/guides",
  },
  tokens: ["METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m"],
  tags: ["tool", "dapp"],
};

const coreContract: Contract = {
  name: `Core`,
  address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d',
  platformId: platform.id,
};

export const metaplexContract: Contract = {
  name: `Token Metadata`,
  address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  platformId: platform.id,
};

export const bubblegumContract: Contract = {
  name: `Bubblegum (cNFT)`,
  address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY',
  platformId: platform.id,
};

export const candyMachineContract: Contract = {
  name: `Candy Machine`,
  address: 'CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-cnft`,
    name: 'Bubblegum (cNFT)',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [bubblegumContract],
    priority: ServicePriority.low,
  },
  {
    id: `${platform.id}-metadata`,
    name: 'Token Metadata',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [metaplexContract],
    priority: ServicePriority.low,
  },
  {
    id: `${platform.id}-core`,
    name: 'Core',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [coreContract],
    priority: ServicePriority.low,
  },
  {
    id: `${platform.id}-candy-machine`,
    name: 'Candy Machine',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [candyMachineContract],
    priority: ServicePriority.low,
  },
];

export default services;
