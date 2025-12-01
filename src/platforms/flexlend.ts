import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { kaminoLendContract } from './kamino';
export const platform: PlatformRaw = {
  id: "flexlend",
  name: "Lulo",
  description:
    "Lulo is a decentralized lending aggregator, which automatically optimizes users deposits by migrating their deposits to the lending pool with the best yield, while allowing for personalized risk settings",
  defiLlamaId: "lulo",
  links: {
    website: "https://www.lulo.fi",
    discord: "https://discord.com/invite/lulo",
    telegram: "https://t.me/uselulo",
    twitter: "https://twitter.com/uselulo",
    github: "https://github.com/lulo-labs",
    documentation: "https://docs.lulo.fi/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Lulo',
  address: 'FL3X2pRsQ9zHENpZSKDRREtccwJuei8yg9fwDu9UN69Q',
  platformId: 'flexlend',
};

export const services: ServiceDefinition[] = [
  {
    id: 'flexlend',
    name: 'Lending',
    platformId: 'flexlend',
    networkId: NetworkId.solana,
    contracts: [contract],
  },
  {
    id: 'flexlend-with-kamino',
    name: 'Lending',
    platformId: 'flexlend',
    networkId: NetworkId.solana,
    contracts: [contract, kaminoLendContract],
  },
];
export default services;
