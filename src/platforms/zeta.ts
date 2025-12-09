import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "zeta",
  name: "Zeta",
  description:
    "Zeta Markets is a derivatives protocol offering perpetual futures trading with cross-margin and portfolio margining.",
  defiLlamaId: "zeta",
  links: {
    website: "https://www.zeta.markets/",
    discord: "https://discord.gg/Xn9HCJaDZd",
    telegram: "https://t.me/realzetamarkets",
    twitter: "https://x.com/ZetaMarkets",
    github: "https://github.com/zetamarkets",
    documentation: "https://docs.zeta.markets/",
  },
  tokens: ["ZEXy1pqteRu3n13kdyh4LwPQknkFk3GzmMYMuNadWPo"],
  tags: ["dapp"],
};

const mainContract = {
  name: "Markets",
  address: "ZETAxsqBRek56DhiGXrn75yj2NHU3aYUnxvHXpkf3aD",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "4DUapvWZDDCkfWJpdwvX2QjwAE9Yq4wU8792RMMv7Csg",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [mainService, stakingService];
