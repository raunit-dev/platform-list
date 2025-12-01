import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "honeyland",
  name: "Honeyland",
  description: "HDX Staking",
  tags: ["dapp"],
  links: {
    website: "https://honey.land/",
  },
};

const contract = {
  name: 'Staking',
  address: 'F1pkXm8W1WNbRvMoZTuKftHJ92ffuzddCCSRKKvCVL7n',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: 'honeyland-staking',
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
