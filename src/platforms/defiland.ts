import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "defiland",
  name: "Defiland",
  description:
    "DeFi Land is an agriculture-simulation game that gamifies decentralized finance with farming, crafting, and trading mechanics.",
  links: {
    website: "https://defiland.app/",
    discord: "https://discord.gg/defiland",
    telegram: "https://t.me/official_defiland",
    twitter: "https://x.com/DeFi_Land",
    documentation: "https://docs.defiland.app/",
  },
  tokens: ["DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh"],
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Staking",
  address: "KJ6b6PswEZeNSwEh1po51wxnbX1C3FPhQPhg8eD2Y6E",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [stakingService];
