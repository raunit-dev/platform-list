import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bouncebit",
  name: "BounceBit",
  description:
    "BounceBit is a CeDeFi platform offering multi-chain institutional yield strategies for BTC, ETH, SOL, and stablecoins through centralized-decentralized hybrid finance.",
  defiLlamaId: "bouncebit",
  tags: ["dapp"],
  links: {
    website: "https://portal.bouncebit.io",
    twitter: "https://x.com/bouncebit",
    discord: "https://discord.gg/bouncebit",
    telegram: "https://t.me/bouncebit_io",
    medium: "https://medium.com/@bouncebit",
    documentation: "https://docs.bouncebit.io/",
  },
};

const contract = {
  name: "CeDeFi v2",
  address: "65YBWQitcBexwuaBKfAV163xDd4LzVAdytATLbttpgxx",
  networkId: NetworkId.solana,
};

const rewardsContract = {
  name: "Rewards",
  address: "5DBxQ4KRKgpCEp46fSs2RG4uoZ5totahCLyjmnn6tKRg",
  networkId: NetworkId.solana,
};

const promoContract = {
  name: "Promo",
  address: "5HRzz8VDD9QjpEBBdq6hBUEXcssxW5mPnod4L6Qgnh9g",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-cedefi-v2`,
  name: "CeDeFi",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://portal.bouncebit.io/cedefi",
  description:
    "CeDeFi vault offering institutional-grade market-neutral strategies with auto-compounding yields for BTC, ETH, SOL, and stablecoins.",
};

export const rewardsService: ServiceRaw = {
  id: `${platform.id}-cedefi`,
  name: "Rewards",
  platformId: platform.id,
  contractsRaw: [rewardsContract],
  description:
    "Rewards distribution program for CeDeFi depositors with boosted APY incentives and promotional reward campaigns.",
};

export const promoService: ServiceRaw = {
  id: `${platform.id}-promo`,
  name: "Promo",
  platformId: platform.id,
  contractsRaw: [promoContract],
};

export const services: ServiceRaw[] = [service, rewardsService, promoService];
