import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "carrot",
  name: "Carrot",
  defiLlamaId: "carrot",
  links: {
    website: "https://deficarrot.com/",
    twitter: "https://x.com/DeFiCarrot",
  },
  tokens: ["CRTx1JouZhzSU6XytsE42UQraoGqiHgxabocVfARTy2s"],
  tags: ["stablecoin", "dapp"],
};

const minterContract = {
  name: 'Minter',
  address: 'CarrotwivhMpDnm27EHmRLeQ683Z1PufuqEmBZvD282s',
  platformId: platform.id,
};

const boostContract = {
  name: 'Boost',
  address: 'C73nDAFn23RYwiFa6vtHshSbcg8x6BLYjw3bERJ3vHxf',
  platformId: platform.id,
};

const minterService: ServiceDefinition = {
  id: `${platform.id}-minter`,
  name: 'Minter',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [minterContract],
};
const boostService: ServiceDefinition = {
  id: `${platform.id}-boost`,
  name: 'Boost',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [boostContract],
};

export const services: ServiceDefinition[] = [minterService, boostService];
export default services;
