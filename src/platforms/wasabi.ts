import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { jupiterV6Contract } from './jupiter';

export const platform: PlatformRaw = {
  id: "wasabi",
  name: "Wasabi",
  defiLlamaId: "wasabi",
  links: {
    website: "https://app.wasabi.xyz/",
    discord: "https://discord.gg/wZqzsfnvmh",
    twitter: "https://x.com/wasabi_protocol",
    documentation: "https://docs.wasabi.xyz/_/overview/what-is-wasabi",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Main',
  address: 'spicyTHtbmarmUxwFSHYpA8G4uP2nRNq38RReMpoZ9c',
  platformId: platform.id,
};

const tradeService: ServiceDefinition = {
  id: `${platform.id}-trade`,
  name: 'Trade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract, jupiterV6Contract],
};

const earnService: ServiceDefinition = {
  id: `${platform.id}-earn`,
  name: 'Trade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [tradeService, earnService];
export default services;
