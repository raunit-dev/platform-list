import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "symmetry",
  name: "Symmetry",
  description: "Solana's on-chain asset management infrastructure layer",
  defiLlamaId: "symmetry",
  links: {
    website: "https://www.symmetry.fi/",
    discord: "http://discord.gg/ahdqBRgE7G",
    telegram: "https://t.me/symmetry_fi",
    twitter: "https://twitter.com/symmetry_fi",
    github: "https://github.com/symmetry-protocol",
    medium: "https://symmetry-fi.medium.com/",
    documentation: "https://docs.symmetry.fi/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Symmetry',
  address: '2KehYt3KsEQR53jYcxjbQp2d2kCp4AkuQW68atufRwSr',
  platformId: 'symmetry',
};

const service: ServiceDefinition = {
  id: 'symmetry',
  name: 'Symmetry',
  platformId: 'symmetry',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
