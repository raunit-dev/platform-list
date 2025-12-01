import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "pumpkin",
  name: "Pumpkin",
  description: "Token Launch Hub",
  tags: ["dapp"],
  links: {
    website: "https://app.pumpkin.fun/",
    telegram: "https://t.me/pumpkindotfun",
    documentation: "https://pumpkindotfun.gitbook.io/",
    twitter: "https://x.com/pumpkindotfun",
  },
};

const contract = {
  name: 'Staking',
  address: 'ARFxpgenuFNbyoysFdqEwTgEdxtLtHbTHwCWHJjqWHTb',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: 'pumpkin-staking',
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
