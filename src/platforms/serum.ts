import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "serum",
  name: "Serum",
  defiLlamaId: "serum",
  isDeprecated: true,
  links: {
    website: "https://projectserum.com/",
  },
  tags: ["dapp"],
  tokens: ["SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"],
};

const contract = {
  name: 'CLOB V1',
  address: '4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn',
  platformId: platform.id,
};

const contract2 = {
  name: 'CLOB V2',
  address: 'EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o',
  platformId: platform.id,
};

const contract3 = {
  name: 'CLOB V3',
  address: '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-clob`,
  name: 'CLOB V1',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const service2: ServiceDefinition = {
  id: `${platform.id}-clob-v2`,
  name: 'CLOB V2',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract2],
};

const service3: ServiceDefinition = {
  id: `${platform.id}-clob-v3`,
  name: 'CLOB V3',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract3],
};

export const services: ServiceDefinition[] = [service, service2, service3];
export default services;
