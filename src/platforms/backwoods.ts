import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "backwoods",
  name: "Backwoods",
  description:
    "A meticulously crafted roguelite game on Solana - fun, rewarding and utterly addictive",
  links: {
    website: "https://backwoods.gg/",
    twitter: "https://x.com/TheBackwoodsSol",
    discord: "https://discord.gg/backwoodsgg",
    documentation: "https://backwoods.gg/#",
  },
  tags: ["gaming"],
};

const contract = {
  name: 'Game',
  address: 'H5RnrnQFVYiGCsGomawwyZ1gJgmMsSXDYbpidZredcGZ',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-game`,
  name: 'Game',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
