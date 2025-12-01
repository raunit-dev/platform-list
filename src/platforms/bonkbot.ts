import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "bonkbot",
  name: "BONKbot",
  links: {
    website: "https://bonkbot.io/",
    twitter: "https://x.com/bonkbot_io",
    documentation: "hhttps://docs.bonkbot.io/",
  },
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Router',
  address: 'CxvksNjwhdHDLr3qbCXNKVdeYACW8cs93vFqLqtgyFE5',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-bot`,
  name: 'Trading',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
