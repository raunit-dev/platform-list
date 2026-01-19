import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bskt",
  name: "BSKT",
  description:
    "BSKT is a protocol for creating baskets of assets in a portfolio with cross-chain liquidity bridging.",
  tags: ["dapp"],
  links: {
    website: "https://www.bskt.fi/",
    discord: "https://discord.gg/VdSdWqpqQ6",
    telegram: "https://t.me/BSKT_FI",
    twitter: "https://x.com/bsktfi",
    documentation: "https://www.bskt.fi/bskt-whitepaper.pdf",
  },
  platformToken: "6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA",
};

const bsktStakingContract = {
  name: "BSKT Staking",
  address: "DF8vgzUDH2CGywD7Gd9jd9Y5Kwmrx97h4Viumjo4rrr6",
  networkId: NetworkId.solana,
};

export const bsktStakingService: ServiceRaw = {
  id: "bskt-staking",
  name: "BSKT Staking",
  platformId: platform.id,
  contractsRaw: [bsktStakingContract],
};

export const services: ServiceRaw[] = [bsktStakingService];
