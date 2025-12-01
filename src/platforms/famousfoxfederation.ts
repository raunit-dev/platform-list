import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "famousfoxfederation",
  name: "Famous Fox Federation",
  links: {
    website: "https://famousfoxes.com",
    discord: "https://discord.com/invite/famousfoxes",
    twitter: "https://twitter.com/famousfoxfed",
  },
  tokens: ["FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq"],
  tags: ["nft-collection", "dapp"],
};

const stakingContract = {
  name: 'Staking',
  address: 'FoXpJL1exLBJgHVvdSHNKyKu2xX2uatctH9qp6dLmfpP',
  platformId: platform.id,
};

const mainContract = {
  name: 'Main',
  address: 'JUicemrQ1X9XizUh1Pcn1SMJoArP8udtEqG5vZiWvkz',
  platformId: platform.id,
};

const missionsContract = {
  name: 'Missions',
  address: '6NcdQ5WTnrPoMLbP4kvpLYa4YSwKqkNHRRE8XVf5hmv9',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const mainService: ServiceDefinition = {
  id: `${platform.id}-tools`,
  name: 'Tool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

const missionsService: ServiceDefinition = {
  id: `${platform.id}-missions`,
  name: 'Missions',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [missionsContract],
};

export const services: ServiceDefinition[] = [
  stakingService,
  mainService,
  missionsService,
];
export default services;
