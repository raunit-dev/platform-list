import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "spiderswap",
  name: "SpiderSwap",
  tags: ["dapp"],
  links: {
    website: "https://www.spiderswap.io/",
  },
};

const contract = {
  name: 'Staking',
  address: 'GTavkffQHnDKDH36YNFpk7uxwHNseTRo24tV4HGC8MNY',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
