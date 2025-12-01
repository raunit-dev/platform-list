import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
export const platform: PlatformRaw = {
  id: "pudgy",
  name: "Pudgy Penguins",
  links: {
    website: "https://pudgypenguins.com/",
    discord: "https://discord.gg/pudgypenguins",
    twitter: "https://x.com/pudgypenguins",
  },
  tokens: ["2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv"],
  tags: ["nft-collection"],
};
const contract = {
  name: 'Airdrop',
  address: 'CUEB3rQGVrvCRTmyjLrPnsd6bBBsGbz1Sr49vxNLJkGR',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
