import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "artrade",
  name: "Artrade",
  description: "Sales club for art & luxury items",
  links: {
    website: "https://artrade.app/",
    twitter: "https://x.com/ArtradeApp",
    discord: "https://discord.gg/QmCeeqmpMz",
    telegram: "https://t.me/ArtradeEnglish",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const contract = {
  name: 'Artrade',
  address: 'Yt3A8KLfo7JEz8RGHw2zbaQE6MVcf9duKmb24dgXbsD',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Artrade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
