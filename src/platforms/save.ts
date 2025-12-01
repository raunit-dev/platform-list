import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "save",
  name: "Save",
  description:
    "Solend is an algorithmic, decentralized protocol for lending and borrowing on Solana. ",
  defiLlamaId: "save",
  tags: ["dapp"],
  links: {
    website: "https://save.finance/",
    discord: "https://discord.com/invite/J7m48UUPkJ",
    twitter: "https://x.com/save_finance",
    github: "https://github.com/solendprotocol",
    documentation: "https://docs.save.finance/",
  },
  tokens: [
    "SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp",
    "SAVEaeeqeXNKYb4Lyx28DkUms5gyZ76vGa6fCfdzWfK",
  ],
};

export const saveContract = {
  name: 'Lending',
  address: 'So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo',
  platformId: platform.id,
};

const wrapperContract = {
  name: 'Wrapper',
  address: '3JmCcXAjmBpFzHHuUpgJFfTQEQnAR7K1erNLtWV1g7d9',
  platformId: platform.id,
};

const migrationContract = {
  name: 'Save Migration',
  address: 'S2SquuEfKRHm1riCj13WobJJzf3CgUwu7QmijxjpTfx',
  platformId: platform.id,
};

const rewardContract = {
  name: 'Reward',
  address: 'mrksLcZ6rMs9xkmJgw6oKiR3GECw44Gb5NeDqu64kiw',
  platformId: platform.id,
};

const lendingService: ServiceDefinition = {
  id: `${platform.id}-lending`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [saveContract],
};

const migrationService: ServiceDefinition = {
  id: `${platform.id}-migration`,
  name: 'Migration',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [migrationContract],
};

const wrapperService: ServiceDefinition = {
  id: `${platform.id}-wrapper`,
  name: 'Wrapper',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [wrapperContract],
};

const rewardService: ServiceDefinition = {
  id: `${platform.id}-reward`,
  name: 'Reward',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [rewardContract],
};

export const services: ServiceDefinition[] = [
  lendingService,
  migrationService,
  wrapperService,
  rewardService,
];
export default services;
