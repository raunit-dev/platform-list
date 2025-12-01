import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "guano",
  name: "Guano",
  links: {
    website: "https://www.guanocoin.com/",
    twitter: "https://x.com/guanocoin",
  },
  tags: ["memecoin"],
};

const contract = {
  name: 'Staking',
  address: 'CFjLE5589EiPZvPFiSx7QgktBH8ZTkkGJU2dL7qbJU2a',
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
