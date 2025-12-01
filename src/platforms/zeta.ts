import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "zeta",
  name: "Zeta",
  description: "Zeta Markets is the premier derivatives protocol on Solana.",
  defiLlamaId: "zeta",
  links: {
    website: "https://www.zeta.markets/",
    discord: "https://discord.gg/Xn9HCJaDZd",
    telegram: "https://t.me/realzetamarkets",
    twitter: "https://x.com/ZetaMarkets",
    github: "https://github.com/zetamarkets",
    documentation: "https://docs.zeta.markets/",
  },
  tokens: ["ZEXy1pqteRu3n13kdyh4LwPQknkFk3GzmMYMuNadWPo"],
  tags: ["dapp"],
};

const mainContract = {
  name: 'Markets',
  address: 'ZETAxsqBRek56DhiGXrn75yj2NHU3aYUnxvHXpkf3aD',
  platformId: platform.id,
};

const mainService: ServiceDefinition = {
  id: `${platform.id}-markets`,
  name: 'Markets',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

const stakingContract = {
  name: 'Staking',
  address: '4DUapvWZDDCkfWJpdwvX2QjwAE9Yq4wU8792RMMv7Csg',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [mainService, stakingService];
export default services;
