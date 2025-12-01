import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "circle",
  name: "Circle",
  description:
    "Move money faster, safer with USDC, the digital dollar made for businesses and developers around the world.",
  links: {
    website: "https://www.circle.com/",
    discord: "https://discord.com/invite/buildoncircle",
    twitter: "https://twitter.com/circle",
    github: "https://github.com/circlefin",
    documentation: "https://www.circle.com/resources",
  },
  tags: ["stablecoin", "bridge", "dapp"],
  tokens: ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"],
};

const minterContract = {
  name: 'CCTP',
  address: 'CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3',
  platformId: platform.id,
};

const transmitterContract = {
  name: 'CCTP',
  address: 'CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd',
  platformId: platform.id,
};

const minterService: ServiceDefinition = {
  id: `${platform.id}-cctp-minter`,
  name: 'CCTP',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [minterContract],
};

const transmitterService: ServiceDefinition = {
  id: `${platform.id}-cctp-transmitter`,
  name: 'CCTP',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [transmitterContract],
};

export const services: ServiceDefinition[] = [
  minterService,
  transmitterService,
];
export default services;
