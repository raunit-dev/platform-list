import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "dflow",
  name: "DFlow",
  description: "Low-latency Solana DEX aggregator",
  links: {
    website: "https://dflow.net/",
    discord: "https://discord.gg/dflow",
    twitter: "https://x.com/dflowprotocol",
  },
  tags: ["dapp", "bridge"],
};

export const contract = {
  name: 'Aggregator',
  address: 'DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-aggregator`,
  name: 'Aggregator',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
