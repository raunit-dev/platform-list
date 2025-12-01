import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "mango",
  name: "Mango",
  description: "Perps and spot trading on Solana",
  defiLlamaId: "parent#mango-markets",
  isDeprecated: true,
  links: {
    website: "https://mango.markets/",
    discord: "https://discord.com/invite/pcSkP3yJMU",
    twitter: "https://twitter.com/mangomarkets",
    github: "https://discord.gg/pcSkP3yJMUs",
  },
  tokens: ["MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac"],
  tags: ["dapp"],
};

const marketsContract = {
  name: 'Markets',
  address: '4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg',
  platformId: platform.id,
};

const redeemContract = {
  name: 'Redeem',
  address: 'mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68',
  platformId: platform.id,
};

const boostContract = {
  name: 'Boost',
  address: 'zF2vSz6V9g1YHGmfrzsY497NJzbRr84QUrPry4bLQ25',
  platformId: platform.id,
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-markets`,
  name: 'Markets V4',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [marketsContract],
};

const redeemService: ServiceDefinition = {
  id: `${platform.id}-redeem`,
  name: 'Markets & Redeem V3',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [redeemContract],
};

const boostService: ServiceDefinition = {
  id: `${platform.id}-boost`,
  name: 'Boost',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [boostContract],
};

export const services: ServiceDefinition[] = [
  airdropService,
  redeemService,
  boostService,
];
export default services;
