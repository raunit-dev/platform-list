import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "runemine",
  name: "RuneMine",
  description:
    "RuneMine by Mine Labs is building the ultimate infrastructure for Bitcoin-backed assets, unlocking the potential of tokens across Bitcoin and beyond.",
  tags: ["bridge", "dapp"],
  links: {
    website: "https://runemine.com",
    discord: "https://discord.gg/runemine",
    twitter: "https://x.com/minelabs_",
    documentation: "https://runemine.gitbook.io/runemine",
    medium: "https://medium.com/@rune_mine",
    telegram: "https://t.me/runeminecommunity",
  },
  tokens: ["BpREyqp3WWfwQroVHvDknoXuh2P88CENMXrSCrGS4dis"],
};

const contract = {
  name: 'Staking',
  address: 'BpREyqp3WWfwQroVHvDknoXuh2P88CENMXrSCrGS4dis',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: 'runemine-staking',
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
