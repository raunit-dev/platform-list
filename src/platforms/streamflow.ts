import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "streamflow",
  name: "Streamflow",
  description:
    "Streamflow exponentially grows on-chain economies by providing infrastructure for creation, distribution, and incentive alignment of tokens.",
  defiLlamaId: "streamflow",
  tags: ["tool", "dapp"],
  links: {
    website: "https://app.streamflow.finance/",
    discord: "https://discord.com/invite/streamflow-851921970169511976",
    twitter: "https://twitter.com/streamflow_fi",
    github: "https://github.com/streamflow-finance",
    medium: "https://streamflow.medium.com/",
    documentation: "https://docs.streamflow.finance/en/",
  },
  tokens: ["STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M"],
};

export const vestingContract = {
  name: 'Vesting',
  address: 'strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Staking',
  address: 'STAKEvGqQTtzJZH6BWDcbpzXXn2BBerPAgQ3EGLN2GH',
  platformId: platform.id,
};
const airdropsContract = {
  name: 'Airdrops',
  address: 'aSTRM2NKoKxNnkmLWk9sz3k74gKBk9t7bpPrTGxMszH',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop Distribution',
  address: 'MErKy6nZVoVAkryxAejJz2juifQ4ArgLgHmaJCQkU7N',
  platformId: platform.id,
};

const vestingService: ServiceDefinition = {
  id: `${platform.id}-vesting`,
  name: 'Vesting',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [vestingContract],
};
const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};
const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrops`,
  name: 'Airdrops',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropsContract],
};
const airdropDistributionService: ServiceDefinition = {
  id: `${platform.id}-airdrop-distribution`,
  name: 'Airdrop Distribution',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [
  vestingService,
  stakingService,
  airdropService,
  airdropDistributionService,
];
export default services;
