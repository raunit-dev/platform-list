import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "omni",
  name: "Omni Bridge",
  links: {
    documentation:
      "https://docs.near.org/chain-abstraction/omnibridge/overview",
    website: "https://docs.near.org/chain-abstraction/omnibridge/overview",
  },
  tags: ["dapp"],
};

const bridgeContract: Contract = {
  name: `Bridge`,
  address: 'dahPEoZGXfyV58JqqH85okdHmpN8U2q8owgPUXSCPxe',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-bridge`,
    name: 'bridge',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [bridgeContract],
  },
];
export default services;
