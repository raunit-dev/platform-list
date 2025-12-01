import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "openloop",
  name: "OpenLoop",
  links: {
    twitter: "https://x.com/openloop_so",
    website: "https://openloop.so/",
    discord: "https://discord.gg/75qBRaUczN",
  },
  tags: ["depin"],
};

const contract = {
  name: 'Sentry Node',
  address: '2KJeTEHuZrkBTonJyTzuA5oKY3q6moEef2haNbY6evVZ',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-sentry-node`,
  name: 'Sentry Node',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
