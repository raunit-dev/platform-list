import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "bouncebit",
  name: "BounceBit",
  tags: ["dapp"],
  links: {
    website: "https://portal.bouncebit.io",
    twitter: "https://twitter.com/bounce_bit",
    discord: "https://discord.gg/bouncebit",
    telegram: "https://t.me/bouncebit_io",
    medium: "https://medium.com/@bouncebit",
    documentation: "https://docs.bouncebit.io/",
  },
};

const contract = {
  name: 'CeDeFi v2',
  address: '65YBWQitcBexwuaBKfAV163xDd4LzVAdytATLbttpgxx',
  platformId: platform.id,
};

const rewardsContract = {
  name: 'Rewards',
  address: '5DBxQ4KRKgpCEp46fSs2RG4uoZ5totahCLyjmnn6tKRg',
  platformId: platform.id,
};

const promoContract = {
  name: 'Promo',
  address: '5HRzz8VDD9QjpEBBdq6hBUEXcssxW5mPnod4L6Qgnh9g',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-cedefi-v2`,
  name: 'CeDeFi',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const rewardsService: ServiceDefinition = {
  id: `${platform.id}-cedefi`,
  name: 'Rewards',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [rewardsContract],
};

const promoService: ServiceDefinition = {
  id: `${platform.id}-promo`,
  name: 'Promo',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [promoContract],
};

export const services: ServiceDefinition[] = [
  service,
  rewardsService,
  promoService,
];
export default services;
