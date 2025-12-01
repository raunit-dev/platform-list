import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "elemental",
  name: "Elemental",
  description:
    "Solana-based crypto fund dedicated to making DeFi investing simple",
  links: {
    website: "https://elemental.fund/",
    telegram: "https://tg.elemental.fund",
    twitter: "https://twitter.com/elementaldefi",
    github: "https://github.com/elementalfund",
    documentation: "https://docs.elemental.fund/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Elemental',
  address: 'ELE5vYY81W7UCpTPs7SyD6Bwm5FwZBntTW8PiGqM5d4A',
  platformId: 'elemental',
};

const service: ServiceDefinition = {
  id: 'elemental',
  name: 'Elemental',
  platformId: 'elemental',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
