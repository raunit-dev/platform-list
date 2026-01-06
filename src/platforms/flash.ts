import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "flash",
  name: "FlashTrade",
  description:
    "FlashTrade is a perpetuals DEX offering instant order fills and on-demand liquidity for leveraged trading.",
  defiLlamaId: "flashtrade",
  links: {
    website: "https://flash.trade/",
    discord: "https://discord.com/invite/HqYDWnMP6J",
    twitter: "https://x.com/FlashTrade",
    github: "https://github.com/flash-trade",
    documentation: "https://docs.flash.trade/flash-trade",
  },
  tags: ["dapp"],
};

const contract = {
  name: "FlashTrade",
  address: "FLASH6Lo6h3iasJKWDs2F8TkW2UKf3s15C8PMGuVfgBn",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "flash-earn",
  name: "Earn",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
