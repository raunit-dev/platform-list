import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "helium",
  name: "Helium",
  links: {
    website: "https://www.helium.com/",
    twitter: "https://twitter.com/helium",
  },
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Voter Stake Registry',
  address: 'hvsrNC3NKbcryqDs2DocYHZ9yPKEVzdSjQG6RVtK1s8',
  platformId: platform.id,
};

const daoContract = {
  name: 'Sub DAO',
  address: 'hdaoVTCqhfHHo75XdAMxBKdUqvq1i5bF23sisBqVgGR',
  platformId: platform.id,
};

const governanceV1Service: ServiceDefinition = {
  id: `${platform.id}-governance-v1`,
  name: 'Governance V1',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const governanceV2Service: ServiceDefinition = {
  id: `${platform.id}-governance-v2`,
  name: 'Governance V2',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [daoContract],
};

export const services: ServiceDefinition[] = [
  governanceV1Service,
  governanceV2Service,
];
export default services;
