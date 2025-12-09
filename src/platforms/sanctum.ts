import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sanctum",
  name: "Sanctum",
  description:
    "Sanctum is a liquid staking protocol that provides unified liquidity for LSTs, enabling instant swaps between any liquid staking tokens and native SOL.",
  defiLlamaId: "parent#sanctum",
  tags: ["lst", "dapp"],
  links: {
    website: "https://www.sanctum.so/",
    discord: "https://discord.gg/sanctumso",
    twitter: "https://twitter.com/sanctumso",
    github: "https://github.com/igneous-labs",
    documentation: "https://learn.sanctum.so/docs",
  },
  tokens: ["CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu"],
};

const infContract = {
  name: "Infinity",
  address: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
  networkId: NetworkId.solana,
};

const voteContract = {
  name: "Vote",
  address: "VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "bon4Kh3x1uQK16w9b9DKgz3Aw4AP1pZxBJk55Q6Sosb",
  networkId: NetworkId.solana,
};

const routerContract = {
  name: "Router",
  address: "stkitrT1Uoy18Dk1fTrgPw8W6MVzoCfYoAFT4MLsmhq",
  networkId: NetworkId.solana,
};

const asrContract = {
  name: "ASR",
  address: "9R2CZDyVjBBK2bxx6NfKdnYMYfh8TQEphUUgZ4861XqJ",
  networkId: NetworkId.solana,
};

export const voteService: ServiceRaw = {
  id: `${platform.id}-vote`,
  name: "Vote",
  platformId: platform.id,
  contractsRaw: [voteContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const poolService: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Infinity Pool",
  platformId: platform.id,
  contractsRaw: [infContract],
};

export const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
};

export const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  contractsRaw: [asrContract],
};

export const services: ServiceRaw[] = [
  voteService,
  stakingService,
  poolService,
  routerService,
  asrService,
];
