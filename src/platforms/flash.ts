import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "flash",
  name: "FlashTrade",
  description: "Trade Perpetuals with instant fills and on demand liquidity.",
  defiLlamaId: "flashtrade",
  links: {
    website: "https://flash.trade/",
    discord: "https://discord.com/invite/HqYDWnMP6J",
    twitter: "https://twitter.com/FlashTrade_",
    github: "https://github.com/flash-trade",
    documentation: "https://docs.flash.trade/flash-trade",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'FlashTrade',
  address: 'FLASH6Lo6h3iasJKWDs2F8TkW2UKf3s15C8PMGuVfgBn',
  platformId: 'flash',
};

const service: ServiceDefinition = {
  id: 'flash',
  name: 'Earn',
  platformId: 'flash',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
