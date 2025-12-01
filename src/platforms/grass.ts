import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "grass",
  name: "Grass",
  description: "Get rewarded for your unused internet",
  links: {
    website: "https://www.grass.io/",
    discord: "https://discord.com/invite/getgrass",
    twitter: "https://x.com/grass",
    documentation: "https://grass-foundation.gitbook.io/grass-docs",
  },
  tokens: ["Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs"],
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Staking',
  address: 'EyxPPowqBRTpZpiDb2ixUR6XUU1VJwTCNgJdK8eyc6kc',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'Eohp5jrnGQgP74oD7ij9EuCSYnQDLLHgsuAmtSTuxABk',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [service, airdropService];
export default services;
