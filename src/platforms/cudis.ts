import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "cudis",
  name: "Cudis",
  tags: ["dapp", "fitness"],
  links: {
    website: "https://www.cudis.xyz/002",
  },
};

const contract = {
  name: 'Main',
  address: 'H3tzuPeKMHd1Wee4JyuYbwKX6pHTcKGDgPw8caVNTvQu',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-main`,
  name: 'Main',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
