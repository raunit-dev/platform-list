import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "solanart",
  name: "Solanart",
  links: {
    website: "https://solanart.io/",
    twitter: "https://x.com/SolanartNFT",
  },
  tags: ["nft-marketplace"],
  isDeprecated: true,
};

const mainContract = {
  name: 'Main',
  address: 'CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz',
  platformId: platform.id,
};

const globalOfferContract = {
  name: 'Global Offer',
  address: '5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-marketplace`,
  name: 'Marketplace',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

const globalOfferService: ServiceDefinition = {
  id: `${platform.id}-global-offer`,
  name: 'Global Offer',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [globalOfferContract],
};

export const services: ServiceDefinition[] = [
  stakingService,
  globalOfferService,
];
export default services;
