import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "playsolana",
  name: "PlaySolana",
  tags: ["gaming", "dapp"],
  links: {
    website: "https://www.playsolana.com/",
    discord: "https://discord.com/invite/playsolanaofficial",
    twitter: "https://www.x.com/playsolana",
  },
};

const contract = {
  name: 'Main',
  address: 'EdvEewANQTdsEco8dKUgCcYA6ZBTen7bP4rwCZjXKJAA',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-main`,
  name: 'Main',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
