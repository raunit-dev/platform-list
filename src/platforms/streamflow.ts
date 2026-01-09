import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
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
    twitter: "https://x.com/streamflow_fi",
    github: "https://github.com/streamflow-finance",
    medium: "https://streamflow.medium.com/",
    documentation: "https://docs.streamflow.finance/en/",
  },
  tokens: ["STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M"],
};

export const vestingContract = {
  name: "Vesting",
  address: "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "STAKEvGqQTtzJZH6BWDcbpzXXn2BBerPAgQ3EGLN2GH",
  networkId: NetworkId.solana,
};

const airdropsContract = {
  name: "Airdrops",
  address: "aSTRM2NKoKxNnkmLWk9sz3k74gKBk9t7bpPrTGxMszH",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop Distribution",
  address: "MErKy6nZVoVAkryxAejJz2juifQ4ArgLgHmaJCQkU7N",
  networkId: NetworkId.solana,
};

export const vestingService: ServiceRaw = {
  id: `${platform.id}-vesting`,
  name: "Vesting",
  platformId: platform.id,
  contractsRaw: [vestingContract],
  link: "https://app.streamflow.finance/vesting",
  description:
    "Token vesting infrastructure for creating customizable vesting schedules with cliff periods, linear unlocks, and automated distributions.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  link: "https://app.streamflow.finance/staking",
  description:
    "Token staking solution enabling projects to create custom staking programs with flexible reward mechanisms and lock periods.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrops`,
  name: "Airdrops",
  platformId: platform.id,
  contractsRaw: [airdropsContract],
  link: "https://app.streamflow.finance/airdrops",
  description:
    "Batch token distribution tool for executing large-scale airdrops with merkle tree verification and gas-efficient claim mechanisms.",
};

export const airdropDistributionService: ServiceRaw = {
  id: `${platform.id}-airdrop-distribution`,
  name: "Airdrop Distribution",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  vestingService,
  stakingService,
  airdropService,
  airdropDistributionService,
];
