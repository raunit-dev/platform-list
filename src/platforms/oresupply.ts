import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "oresupply",
  name: "OreSupply",
  description: "Proof of work on Solana.",
  tags: ["tool"],
  links: {
    website: "https://ore.supply/",
    discord: "https://discord.gg/4TQfshAAsT",
    twitter: "https://x.com/oresupply",
    github: "https://github.com/regolith-labs/ore",
    documentation: "https://ore.supply/mine",
  },
  tokens: ["oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"],
};

const contract = {
  name: 'Mining',
  address: 'poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc',
  platformId: platform.id,
};

const legacyStakingContract = {
  name: 'V1',
  address: 'BoostzzkNfCA9D1qNuN5xZxB5ErbK4zQuBeTHGDpXT1',
  platformId: platform.id,
};

const v2Contract = {
  name: 'V2',
  address: 'oreV2ZymfyeXgNgBdqMkumTqqAprVqgBWQfoYkrtKWQ',
  platformId: platform.id,
};

const v3Contract = {
  name: 'V3',
  address: 'oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-mining`,
  name: 'Mining',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const v1Service: ServiceDefinition = {
  id: `${platform.id}-v1`,
  name: 'V1',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [legacyStakingContract],
};

const v2Service: ServiceDefinition = {
  id: `${platform.id}-v2`,
  name: 'V2',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [v2Contract],
};

const v3Service: ServiceDefinition = {
  id: `${platform.id}-v3`,
  name: 'V3',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [v3Contract],
};

export const services: ServiceDefinition[] = [
  service,
  v1Service,
  v2Service,
  v3Service,
];
export default services;
