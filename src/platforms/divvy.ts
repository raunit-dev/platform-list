import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "divvy",
  name: "Divvy",
  description:
    "Frictionless betting experience powered by Solana with no signups or deposits",
  defiLlamaId: "divvy.bet",
  links: {
    website: "https://app.divvy.bet/",
    discord: "https://discord.com/invite/divvybet",
    twitter: "https://twitter.com/DivvyBet",
    documentation:
      "https://divvy.bet/wp-content/uploads/2022/12/Divvy_Knowledge_Hub_06.pdf",
  },
  tokens: ["8fdi18UQNGg8mFEzjf79GUkzTg9YHSeojzCcarVxCX2y"],
  tags: ["gaming", "dapp"],
};

const contract = {
  name: 'Divvy',
  address: 'dvyFwAPniptQNb1ey4eM12L8iLHrzdiDsPPDndd6xAR',
  platformId: 'divvy',
};

const service: ServiceDefinition = {
  id: 'divvy',
  name: 'Divvy',
  platformId: 'divvy',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
