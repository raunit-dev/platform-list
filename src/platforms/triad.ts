import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "triad",
  name: "Triad",
  description:
    "Prediction markets on Solana. Trade politics, crypto, sports & culture.",
  tags: ["dapp"],
  links: {
    website: "https://app.triadfi.co/",
    discord: "http://discord.gg/triadfi",
    telegram: "https://t.me/triad369",
    twitter: "https://x.com/triadfi",
    github: "https://github.com/triadxyz",
    documentation: "https://docs.triadfi.co/",
  },
  tokens: ["t3DohmswhKk94PPbPYwA6ZKACyY3y5kbcqeQerAJjmV"],
};

const contract = {
  name: 'Prediction Market',
  address: 'TRDwq3BN4mP3m9KsuNUWSN6QDff93VKGSwE95Jbr9Ss',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}`,
  name: 'Prediction Market',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
