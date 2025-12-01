import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "solstice",
  name: "Solstice",
  tags: ["dapp", "stablecoin"],
  links: {
    website: "https://solstice.finance/",
    twitter: "https://x.com/solsticefi",
    documentation: "https://docs.solstice.finance/",
  },
  tokens: [
    "6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG",
    "3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC",
  ],
};

export const contract = {
  name: 'Yield Vault',
  address: 'eUSXyKoZ6aGejYVbnp3wtWQ1E8zuokLAJPecPxxtgG3',
  platformId: platform.id,
};

export const usxJustEarnContract = {
  name: 'USX Just Earn',
  address: 'JECcmzAWytxXQtMN3taGmAYhTK4CDEfwEGrzfMvVeGXm',
  platformId: platform.id,
};
export const usxContract = {
  name: 'USX',
  address: 'USXyiSTsPEWz55pSK7sZoUL79ntoVGQbaTDT57tH6bx',
  platformId: platform.id,
};

export const yieldVaultService: ServiceDefinition = {
  id: `${platform.id}-yield-vault`,
  name: 'Yield Vault',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};
export const usxJustEarnService: ServiceDefinition = {
  id: `${platform.id}-usx-just-earn`,
  name: 'USX Just Earn',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [usxJustEarnContract],
};
export const usxService: ServiceDefinition = {
  id: `${platform.id}-usx`,
  name: 'Lock',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [usxContract],
};

export const services: ServiceDefinition[] = [
  yieldVaultService,
  usxJustEarnService,
  usxService,
];
export default services;
