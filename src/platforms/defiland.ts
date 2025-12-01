import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "defiland",
  name: "Defiland",
  description:
    "Multi-chain agriculture-simulation game created to gamify Decentralized Finance",
  links: {
    website: "https://defiland.app/",
    discord: "https://discord.gg/defiland",
    telegram: "https://t.me/official_defiland",
    twitter: "https://x.com/DeFi_Land",
    documentation: "https://docs.defiland.app/",
  },
  tokens: ["DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh"],
  tags: ["gaming", "dapp"],
};

const contract = {
  name: 'Staking',
  address: 'KJ6b6PswEZeNSwEh1po51wxnbX1C3FPhQPhg8eD2Y6E',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [stakingService];
export default services;
