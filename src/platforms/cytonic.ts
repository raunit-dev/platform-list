import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "cytonic",
  name: "Cytonic",
  tags: ["bridge", "tool", "dapp"],
  links: {
    website: "https://www.cytonic.com/",
    twitter: "https://x.com/cytonic_com",
    discord: "https://discord.com/invite/cytonic",
    github: "https://github.com/cytonic-network",
    telegram: "https://t.me/cytonic_official",
  },
};

const solanaContract = {
  name: 'Main',
  address: 'HYDqq5GfUj4aBuPpSCs4fkmeS7jZHRhrrQ3q72KsJdD4',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-solana`,
  name: 'Solana',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solanaContract],
};
export const services: ServiceDefinition[] = [service];
export default services;
