import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "hedgehog",
  name: "Hedgehog Markets",
  description: "Prediction markets on Solana",
  defiLlamaId: "hedgehog-markets",
  links: {
    website: "https://hedgehog.markets",
    discord: "http://discord.gg/2KusaG9wH7",
    twitter: "https://twitter.com/HedgehogMarket",
    github: "https://github.com/Hedgehog-Markets",
    medium: "https://hedgehogmarkets.substack.com/",
  },
  tags: ["dapp"],
};

const ammContract = {
  name: 'AMM',
  address: 'Hr4whNgXr3yZsJvx3TVSwfsFgXuSEPB1xKmvgrtLhsrM',
  platformId: platform.id,
};

const swapContract = {
  name: 'Swap',
  address: '2ZznCMfx2XP43zaPw9R9wKnjXWiEeEexyhdBPv3UqDtD',
  platformId: platform.id,
};

const tokensContract = {
  name: 'Tokens',
  address: 'D8vMVKonxkbBtAXAxBwPPWyTfon8337ARJmHvwtsF98G',
  platformId: platform.id,
};

const governanceV1Service: ServiceDefinition = {
  id: `${platform.id}-markets`,
  name: 'Markets',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [ammContract, swapContract, tokensContract],
};

export const services: ServiceDefinition[] = [governanceV1Service];
export default services;
