import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "orca",
  name: "Orca",
  description:
    "Orca is the go-to place to trade tokens and provide liquidity on Solana",
  defiLlamaId: "orca",
  links: {
    website: "https://www.orca.so/",
    discord: "https://discord.orca.so/",
    twitter: "https://twitter.com/orca_so",
    github: "https://github.com/orca-so",
    medium: "https://orca-so.medium.com/",
    documentation: "https://docs.orca.so/",
  },
  tokens: ["orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE"],
  tags: ["dapp"],
};

const poolsContract: Contract = {
  name: `Orca Pools`,
  address: '9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP',
  platformId: platform.id,
};

const aquaFarmsContract: Contract = {
  name: `Orca Aqua Farms`,
  address: '82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ',
  platformId: platform.id,
};
const whirlpoolContract: Contract = {
  name: `Orca Whirlpool`,
  address: 'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc',
  platformId: platform.id,
};
const stakingContract: Contract = {
  name: `Orca Staking`,
  address: 'StaKE6XNKVVhG8Qu9hDJBqCW3eRe7MDGLz17nJZetLT',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-pools`,
    name: 'Pools',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [poolsContract],
  },
  {
    id: `${platform.id}-farms`,
    name: 'Aqua Farms',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [aquaFarmsContract],
  },
  {
    id: `${platform.id}-whirlpools`,
    name: 'Whirlpools',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [whirlpoolContract],
  },
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [stakingContract],
  },
];
export default services;
