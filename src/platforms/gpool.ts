import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "gpool",
  name: "GPool",
  links: {
    website: "https://github.com/gpool-cloud/gpool-staking-ui",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: 'Staking',
  address: 'poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [stakingService];
export default services;
