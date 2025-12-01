import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "exponent",
  name: "Exponent",
  description:
    "Building Solana's DeFi yield exchange — Choose between fixed or leveraged yields.",
  defiLlamaId: "exponent",
  links: {
    website: "https://www.exponent.finance",
    telegram: "https://t.me/exponentcitizens",
    twitter: "https://x.com/exponentfinance",
    github: "https://github.com/exponent-finance",
    documentation: "https://docs.exponent.finance/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Core',
  address: 'ExponentnaRg3CQbW6dqQNZKXp7gtZ9DGMp1cwC4HAS7',
  platformId: 'exponent',
};

const service: ServiceDefinition = {
  id: 'exponent',
  name: 'Core',
  platformId: 'exponent',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
