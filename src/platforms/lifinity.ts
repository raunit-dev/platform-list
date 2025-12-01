import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "lifinity",
  name: "Lifinity",
  description:
    "Solana's oracle-based DEX, designed to improve capital efficiency and reverse impermanent loss.",
  defiLlamaId: "parent#lifinity",
  links: {
    website: "https://lifinity.io/",
    discord: "http://discord.gg/K2tvfcXwWr",
    twitter: "https://x.com/Lifinity_io",
    github: "https://github.com/Lifinity-Labs",
    medium: "https://medium.com/@lifinity.io",
    documentation: "https://docs.lifinity.io/",
  },
  tokens: [
    "LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp",
    "xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu",
  ],
  tags: ["dapp"],
};

const contract = {
  name: 'Locker',
  address: 'LLoc8JX5dLAMVzbzTNKG6EFpkyJ9XCsVAGkqwQKUJoa',
  platformId: platform.id,
};

const rewarderContract = {
  name: 'Rewarder',
  address: 'LRewdYDnxyP9HXCL6DQYgTaeL9FKb5Pc8Gr4UbVrtnj',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-locker`,
  name: 'Locker',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const rewarderService: ServiceDefinition = {
  id: `${platform.id}-Reward`,
  name: 'Reward',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [rewarderContract],
};
export const services: ServiceDefinition[] = [service, rewarderService];
export default services;
