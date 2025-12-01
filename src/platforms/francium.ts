import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "francium",
  name: "Francium",
  description:
    "Francium is a DeFi yield strategy Platform on Solana, providing leveraged/hedged farming, DeFi strategies & on-chain trading strategies.",
  defiLlamaId: "francium",
  isDeprecated: true,
  links: {
    website: "https://francium.io/",
    discord: "https://discord.gg/francium",
    telegram: "https://t.me/franciumprotocol",
    twitter: "https://x.com/Francium_Defi",
    github: "https://github.com/Francium-DeFi",
    medium: "https://francium-defi.medium.com/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Francium',
  address: 'FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj',
  platformId: 'francium',
};

const service: ServiceDefinition = {
  id: 'francium',
  name: 'Francium',
  platformId: 'francium',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
