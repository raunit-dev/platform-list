import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "haven",
  name: "Haven",
  tags: ["dapp"],
  links: {
    website: "https://haven.trade/",
    twitter: "https://x.com/haven_fi",
    discord: "https://discord.gg/DxJyNp5mS4",
    github: "https://github.com/haven-fi/solauto",
    telegram: "https://t.me/haven_fi",
  },
};

const contract = {
  name: 'Leverage',
  address: 'AutoyKBRaHSBHy9RsmXCZMy6nNFAg5FYijrvZyQcNLV',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-leverage`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
