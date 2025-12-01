import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "okx",
  name: "OKX",
  description:
    "Freely choose trading routes from all major DEX aggregators, while X Routing continues to find the best quotes across 400+ DEXs and 30+ networks",
  links: {
    website: "https://web3.okx.com/dex-swap/bridge",
  },
  tags: ["bridge", "dapp"],
};

const aggregatorContract: Contract = {
  name: `Aggregator`,
  address: '6m2CDdhRgxpH4WjvdzxAYbGxwdGUz5MziiL5jek2kBma',
  platformId: platform.id,
};

const aggregatorV6Contract: Contract = {
  name: `Aggregator V6`,
  address: 'proVF4pMXVaYqmy4NjniPh4pqKNfMmsihgd4wdkCX3u',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-aggregator`,
    name: 'Aggregator',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [aggregatorContract],
  },
  {
    id: `${platform.id}-aggregator-v6`,
    name: 'Aggregator V6',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [aggregatorV6Contract],
  },
];
export default services;
