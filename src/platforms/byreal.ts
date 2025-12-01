import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "byreal",
  name: "Byreal",
  tags: ["dapp"],
  links: {
    website: "https://www.byreal.io/",
    telegram: "https://t.me/Byreal_Community",
    twitter: "https://x.com/byreal_io",
    documentation: "https://docs.byreal.io/products/getting-started",
  },
};

const clmmContract = {
  name: 'CLMMM',
  address: 'REALQqNEomY6cQGZJUGwywTBD2UmDT32rZcNnfxQ5N2',
  platformId: 'byreal',
};

const resetContract = {
  name: 'Reset',
  address: 'REALdpFGDDsiD9tvxYsXBTDpgH1gGQEqJ8YSLdYQWGD',
  platformId: 'byreal',
};

const routerContract = {
  name: 'Router',
  address: 'REALp6iMBDTctQqpmhBo4PumwJGcybbnDpxtax3ara3',
  platformId: 'byreal',
};

const rfqContract = {
  name: 'RFQ',
  address: 'REALFP9S4VmrAixmeYa68FrPKn4NVD2QFxxMfz9arhz',
  platformId: 'byreal',
};

const clmmService: ServiceDefinition = {
  id: 'byreal-clmm',
  networkId: NetworkId.solana,
  name: 'CLMM',
  contracts: [clmmContract],
  platformId: platform.id,
};

const resetService: ServiceDefinition = {
  id: 'byreal-reset',
  networkId: NetworkId.solana,
  name: 'Reset Launchpad',
  contracts: [resetContract],
  platformId: platform.id,
};

const routerService: ServiceDefinition = {
  id: 'byreal-router',
  networkId: NetworkId.solana,
  name: 'Router',
  contracts: [routerContract],
  platformId: platform.id,
};

const rfqService: ServiceDefinition = {
  id: 'byreal-rfq',
  networkId: NetworkId.solana,
  name: 'RFQ',
  contracts: [rfqContract],
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  clmmService,
  resetService,
  routerService,
  rfqService,
];
export default services;
