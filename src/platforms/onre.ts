import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "onre",
  name: "OnRe",
  description: "yielding dollar asset on Solana",
  links: {
    website: "https://www.onre.finance/",
    twitter: "https://x.com/onrefinance",
    github: "https://github.com/onre-finance",
    telegram: "https://t.me/+mW8VqpLlFIExMmMx",
  },
  tags: ["dapp", "stablecoin"],
};

const depositContract: Contract = {
  name: `Deposit`,
  address: 'onreuGhHHgVzMWSkj2oQDLDtvvGvoepBPkqyaubFcwe',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-deposit`,
    name: 'Deposit',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [depositContract],
  },
];
export default services;
