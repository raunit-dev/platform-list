import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "huma",
  name: "Huma",
  description:
    "Huma Finance is a PayFi protocol providing instant liquidity for global payments and cross-border transactions.",
  tags: ["dapp"],
  links: {
    website: "https://huma.finance/",
    twitter: "https://twitter.com/humafinance",
    discord: "https://discord.gg/29zVxZ6kCN",
    github: "https://github.com/00labs",
    documentation: "https://huma-finance.gitbook.io/huma-2.0",
  },
  tokens: [
    "59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw",
    "HUPfpnsaJtJGpJxAPNX1vXah7BgYiQYt1c2JMgMumvPs",
  ],
};

const contract = {
  name: "Permissionless",
  address: "HumaXepHnjaRCpjYTokxY4UtaJcmx41prQ8cxGmFC5fn",
  networkId: NetworkId.solana,
};

const institutionalContract = {
  name: "Institutional",
  address: "EVQ4s1b6N1vmWFDv8PRNc77kufBP8HcrSNWXQAhRsJq9",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "Distcc8stwHiwnxxj5BWkP9Re7MWRhH3JqRaRxfQC6Zr",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "vsRJM68m7i18PwzTFphgPYXTujCgxEi28knpUwSmg3q",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-permissionless`,
  name: "Permissionless",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const institutionalService: ServiceRaw = {
  id: `${platform.id}-institutional`,
  name: "Institutional",
  platformId: platform.id,
  contractsRaw: [institutionalContract],
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [
  service,
  institutionalService,
  airdropService,
  stakingService,
];
