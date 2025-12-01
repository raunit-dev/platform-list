import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "allbridge",
  name: "Allbridge",
  description:
    "Allbridge is a cross-chain bridge that enables seamless asset transfers between different blockchains.",
  tags: ["tool", "bridge", "dapp"],
  defiLlamaId: "allbridge-core",
  links: {
    website: "https://core.allbridge.io",
    discord: "https://discord.com/invite/ASuPY8d3E6",
    twitter: "https://twitter.com/Allbridge_io",
    github: "https://github.com/allbridge-io",
    documentation: "https://docs-core.allbridge.io/",
    telegram: "https://t.me/allbridge_official",
    medium: "https://allbridge.medium.com/",
  },
};

const contract = {
  name: 'Bridge',
  address: 'BrdgN2RPzEMWF96ZbnnJaUtQDQx7VRXYaHHbYCBvceWB',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Staking',
  address: 'stk8xj8cygGKnFoLE1GL8vHABcHUbYrnPCkxdL5Pr2q',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-bridge`,
  name: 'Bridge',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [service, stakingService];
export default services;
