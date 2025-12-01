import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "pumpswap",
  name: "PumpSwap",
  description: "Swap tokens on Pump.",
  defiLlamaId: "pumpswap",
  tags: ["dapp"],
  links: {
    website: "https://swap.pump.fun/",
    telegram: "https://t.me/pumpfunsupport",
  },
};

const contract = {
  name: 'PumpSwap AMM',
  address: 'pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA',
  platformId: 'pumpswap',
};

const service: ServiceDefinition = {
  id: 'pumpswap',
  name: 'PumpSwap AMM',
  platformId: 'pumpswap',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
