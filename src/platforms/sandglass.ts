import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "sandglass",
  name: "Sandglass",
  links: {
    website: "https://sandglass.so/",
    discord: "https://discord.gg/jSNe84QZ67",
    twitter: "https://twitter.com/sandglass_so",
    medium:
      "https://medium.com/@lifinity.io/introducing-sandglass-a-yield-trading-protocol-on-solana-9b5ee5b33aff",
  },
  tags: ["dapp"],
};

const mainContract = {
  name: 'Markets',
  address: 'SANDsy8SBzwUE8Zio2mrYZYqL52Phr2WQb9DDKuXMVK',
  platformId: platform.id,
};

const mainService: ServiceDefinition = {
  id: `${platform.id}-markets`,
  name: 'Markets',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

export const services: ServiceDefinition[] = [mainService];
export default services;
