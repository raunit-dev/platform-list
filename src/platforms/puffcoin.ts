import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "puffcoin",
  name: "Puff",
  links: {
    website: "https://staking.puffcoin.fun/",
  },
  tags: ["memecoin"],
};

const contract = {
  name: 'Staking',
  address: 'q8gz8Sww7Xexpqk9DrEMjNXMHnFx6dB3EYe32PwHHd6',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
