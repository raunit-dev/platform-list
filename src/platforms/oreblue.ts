import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "oreblue",
  name: "ORE Blue",
  tags: ["tool"],
  links: {
    website: "https://ore.blue/",
    discord: "https://discord.com/invite/69uxav4fe4",
    twitter: "https://x.com/OREdotblue",
    documentation: "https://ore.blue/about",
  },
  tokens: ["orebyr4mDiPDVgnfqvF5xiu5gKnh94Szuz8dqgNqdJn"],
};

const v3Contract = {
  name: 'V3',
  address: 'boreXQWsKpsJz5RR9BMtN8Vk4ndAk23sutj8spWYhwk',
  platformId: platform.id,
};

const v3Service: ServiceDefinition = {
  id: `${platform.id}-v3`,
  name: 'Mining',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [v3Contract],
};

export const services: ServiceDefinition[] = [v3Service];
export default services;
