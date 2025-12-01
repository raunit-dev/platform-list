import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "ensofi",
  name: "EnsoFi",
  description:
    "Cross-chain DeFi Hub. Lend, Borrow, LSTs, Earn & more with stable returns.",
  links: {
    website: "https://app.ensofi.xyz",
    discord: "https://discord.com/invite/ensofi",
    telegram: "https://t.me/ensofiapp_bot/ensofi?startapp=mainnet",
    twitter: "https://twitter.com/Ensofi_xyz",
    github: "https://github.com/Ensofi-xyz",
    documentation: "https://ensofi.gitbook.io/ensofi",
  },
  tags: ["dapp"],
};

const lendingContract: Contract = {
  name: 'Lending Fixed Terms',
  address: 'ensoQXKf4MvNuEC3M9xmcqUqgucFNd5UzAonDdUtgqn',
  platformId: platform.id,
};

const lendingFlexContract: Contract = {
  name: 'Lending Flexible Terms',
  address: 'enseM1J4dGgwEw3qDyuVBi7YsjgwqvKzuX3ZLaboLGv',
  platformId: platform.id,
};

const liquidityContract: Contract = {
  name: 'Liquidity',
  address: 'ensSuXMeaUhRC7Re3ukaxLcX2E4qmd2LZxbxsK9XcWz',
  platformId: 'ensofi',
};

const lendingService: ServiceDefinition = {
  id: `${platform.id}-lending`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [lendingContract],
};

const lendingFlexService: ServiceDefinition = {
  id: `${platform.id}-lending-flex`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [lendingFlexContract],
};

const liquidityService: ServiceDefinition = {
  id: `${platform.id}-liquidity`,
  name: 'Liquidity',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [liquidityContract],
};

export const services: ServiceDefinition[] = [
  lendingService,
  lendingFlexService,
  liquidityService,
];
export default services;
