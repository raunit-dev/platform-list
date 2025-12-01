import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "staratlas",
  name: "Star Atlas",
  description:
    "A grand strategy game of space exploration, territorial conquest, political domination, and more.",
  tags: ["gaming"],
  links: {
    website: "https://staratlas.com/",
    discord: "https://discord.com/invite/StarAtlas",
    telegram: "https://t.me/staratlasgame",
    twitter: "https://twitter.com/staratlas",
    github: "https://github.com/staratlasmeta",
    documentation: "https://staratlas.com/newsroom/game-manuals",
  },
  tokens: [
    "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
  ],
};

const stakingContract = {
  name: 'Staking',
  address: 'ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc',
  platformId: platform.id,
};

const lockerContract = {
  name: 'Locker',
  address: 'Lock7kBijGCQLEFAmXcengzXKA88iDNQPriQ7TbgeyG',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-governance`,
  name: 'Governance',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract, lockerContract],
};

export const services: ServiceDefinition[] = [service];
export default services;
