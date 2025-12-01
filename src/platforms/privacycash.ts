import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "privacycash",
  name: "Privacy Cash",
  description: "Transfer SOL privately",
  links: {
    website: "https://www.privacycash.org/",
    discord: "https://discord.gg/8guY9uXBvA",
    twitter: "https://x.com/theprivacycash",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Send',
  address: '9fhQBbumKEFuXtMBDw8AaQyAjCorLGJQiS3skWZdQyQD',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-send`,
  name: 'Send',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
