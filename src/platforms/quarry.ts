import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "quarry",
  name: "Quarry",
  defiLlamaId: "quarry",
  isDeprecated: true,
  links: {
    website: "https://app.quarry.so/",
    github: "https://github.com/QuarryProtocol",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Mine',
  address: 'QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB',
  platformId: platform.id,
};

const mergeContract = {
  name: 'Merge Mine',
  address: 'QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto',
  platformId: platform.id,
};

const minerService: ServiceDefinition = {
  id: `${platform.id}-miner`,
  name: 'Miner',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const mergeMinerService: ServiceDefinition = {
  id: `${platform.id}-merge-miner`,
  name: 'Merge Miner',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mergeContract],
};

export const services: ServiceDefinition[] = [minerService, mergeMinerService];
export default services;
