import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "iloop",
  name: "ILoop",
  description: "The first AI-optimized Vault for LST and Defi on Solana",
  defiLlamaId: "iloop",
  links: {
    website: "https://app.iloop.finance/",
    discord: "https://discord.com/invite/ffDUZZ4kuu",
    telegram: "https://t.me/iloophq",
    twitter: "https://twitter.com/iLoop_HQ",
    documentation: "https://iloop-1.gitbook.io/docs.iloop.finance",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Lending',
  address: '3i8rGP3ex8cjs7YYWrQeE4nWizuaStsVNUXpRGtMbs3H',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-lending`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
