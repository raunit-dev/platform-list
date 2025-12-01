import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "sanctum",
  name: "Sanctum",
  description:
    "Sanctum is a new primitive built on Solana to power liquid staking and bring Solana into an infinite-LST future. Sanctum enables users that stake SOL natively or with a liquid staking token (LST) to tap into a powerful unified liquidity layer.",
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

const poolContract = {
  name: 'Infinity Pool',
  address: '5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx',
  platformId: platform.id,
};

const infContract = {
  name: 'Infinity',
  address: '5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx',
  platformId: platform.id,
};

const voteContract = {
  name: 'Vote',
  address: 'VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Staking',
  address: 'bon4Kh3x1uQK16w9b9DKgz3Aw4AP1pZxBJk55Q6Sosb',
  platformId: platform.id,
};

const routerContract = {
  name: 'Router',
  address: 'stkitrT1Uoy18Dk1fTrgPw8W6MVzoCfYoAFT4MLsmhq',
  platformId: platform.id,
};

const asrContract = {
  name: 'ASR',
  address: '9R2CZDyVjBBK2bxx6NfKdnYMYfh8TQEphUUgZ4861XqJ',
  platformId: platform.id,
};

const voteService: ServiceDefinition = {
  id: `${platform.id}-vote`,
  name: 'Vote',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [voteContract],
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const poolService: ServiceDefinition = {
  id: `${platform.id}-pool`,
  name: 'Infinity Pool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [poolContract],
};

const routerService: ServiceDefinition = {
  id: `${platform.id}-router`,
  name: 'Router',
  platformId: platform.id,
  priority: ServicePriority.low,
  networkId: NetworkId.solana,
  contracts: [routerContract],
};

const tradeService: ServiceDefinition = {
  id: `${platform.id}-trade`,
  name: 'Trade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [infContract],
};

const asrService: ServiceDefinition = {
  id: `${platform.id}-asr`,
  name: 'ASR',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [asrContract],
};

export const services: ServiceDefinition[] = [
  voteService,
  stakingService,
  poolService,
  routerService,
  tradeService,
  asrService,
];
export default services;
