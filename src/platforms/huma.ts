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

const primeContract = {
  name: "Prime",
  address: "prm1azdDGzyqP76s3Hv2nuG3uLnBgR5u2d7pANwmmzC",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-permissionless`,
  name: "Permissionless",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://app.huma.finance/",
  description:
    "Open liquidity pools allowing any user to provide capital and earn yield from payment financing and cross-border transaction flows.",
};

export const institutionalService: ServiceRaw = {
  id: `${platform.id}-institutional`,
  name: "Institutional",
  platformId: platform.id,
  contractsRaw: [institutionalContract],
  description:
    "KYC-gated liquidity pools for accredited investors seeking higher yields from institutional-grade payment financing opportunities.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
  description:
    "Token distribution program for HUMA governance tokens to early users and liquidity providers.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "HUMA token staking for governance participation and earning protocol revenue share.",
};

export const primeService: ServiceRaw = {
  id: `${platform.id}-prime`,
  name: "Prime",
  platformId: platform.id,
  contractsRaw: [primeContract],
  description:
    "Looping strategy vault for $PST.",
};

export const services: ServiceRaw[] = [
  service,
  institutionalService,
  airdropService,
  stakingService,
  primeService,
];
