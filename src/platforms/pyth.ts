import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "pyth",
  name: "Pyth",
  description:
    "Secure your smart contracts with reliable, low-latency market data from institutional sources. Build apps with high-fidelity oracle feeds designed for mission-critical systems.",
  defiLlamaId: "pyth-network",
  links: {
    website: "https://pyth.network/",
    discord: "https://discord.com/invite/pythnetwork",
    twitter: "https://twitter.com/PythNetwork",
    github: "https://github.com/pyth-network",
    documentation: "https://docs.pyth.network/home",
  },
  tokens: ["HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3"],
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Staking',
  address: 'pytS9TjG1qyAZypk7n8rw8gfW9sUaqqYyMhJQ4E7JCQ',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'EXxqB6XPLczReFcZyigfbdowB6WGYtnkLYC4XZ2ae9ch',
  platformId: platform.id,
};

export const expressRelayContract = {
  name: 'Express Relay',
  address: 'PytERJFhAKuNNuaiXkApLfWzwNwSNDACpigT3LwQfou',
  platformId: platform.id,
};

const governanceContract = {
  name: 'Governance',
  address: 'pytGY6tWRgGinSCvRLnSv4fHfBTMoiDGiCsesmHWM6U',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const governanceService: ServiceDefinition = {
  id: `${platform.id}-governance`,
  name: 'Governance',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [governanceContract],
};

const expressRelayService: ServiceDefinition = {
  id: `${platform.id}-express-relay`,
  name: 'Express Relay',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [expressRelayContract],
};

export const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [
  stakingService,
  expressRelayService,
  governanceService,
  airdropService,
];
export default services;
