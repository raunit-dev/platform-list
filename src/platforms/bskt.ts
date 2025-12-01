import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "bskt",
  name: "BSKT",
  description:
    "Baskets of assets in a portfolio, bridging liquidity cross-chain.",
  tags: ["dapp"],
  links: {
    website: "https://claim.bskt.fi/",
    discord: "https://discord.gg/VdSdWqpqQ6",
    telegram: "https://t.me/BSKT_FI",
    twitter: "https://twitter.com/bsktfi",
    documentation: "https://www.bskt.fi/bskt-whitepaper.pdf",
  },
  tokens: ["6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"],
};

const bsktStakingContract = {
  name: 'BSKT Staking',
  address: 'DF8vgzUDH2CGywD7Gd9jd9Y5Kwmrx97h4Viumjo4rrr6',
  platformId: 'bskt',
};

const bsktStakingService: ServiceDefinition = {
  id: 'bskt-staking',
  name: 'BSKT Staking',
  platformId: 'bskt',
  networkId: NetworkId.solana,
  contracts: [bsktStakingContract],
};

export const services: ServiceDefinition[] = [bsktStakingService];
export default services;
