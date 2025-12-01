import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "reflect",
  name: "Reflect",
  description: "Autonomous money designed for the stablecoin era",
  links: {
    website: "https://www.reflect.money/",
    twitter: "https://x.com/reflectmoney",
    documentation: "https://docs.reflect.money/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'USDC+ Mint',
  address: 'rFLctqnUuxLmYsW5r9zNujfJx9hGpnP1csXr9PYwVgX',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-mint`,
  name: 'Stablecoins',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
  link: 'https://alpha.reflect.money/',
};

export const services: ServiceDefinition[] = [service];
export default services;
