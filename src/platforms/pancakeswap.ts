import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "pancakeswap",
  name: "PancakeSwap",
  description: "Trade, earn, and own crypto on the all-in-one multichain DEX.",
  links: {
    website: "https://solana.pancakeswap.finance/",
    twitter: "https://twitter.com/pancakeswap",
    discord: "https://discord.gg/pancakeswap",
    github: "https://github.com/pancakeswap/",
  },
  tags: ["dex", "dapp"],
};

const contract: Contract = {
  name: `PancakeSwap`,
  address: 'HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}`,
    name: 'Liquidity',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
];
export default services;
