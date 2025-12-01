import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "layer3",
  name: "Layer3",
  description: "Powering the next generation of consumer attention.",
  links: {
    website: "https://app.layer3.xyz/",
    discord: "https://discord.gg/layer3",
    twitter: "https://twitter.com/layer3xyz",
    github: "https://github.com/layer3xyz",
    documentation: "https://docs.layer3.xyz/",
  },
  tokens: ["5k84VjAKoGPXa7ias1BNgKUrX7e61eMPWhZDqsiD4Bpe"],
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Staking',
  address: 'HE6bCtjsrra8DRbJnexKoVPSr5dYs57s3cuGHfotiQbq',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};
export const services: ServiceDefinition[] = [stakingService];
export default services;
