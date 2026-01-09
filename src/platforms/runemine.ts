import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "runemine",
  name: "RuneMine",
  description:
    "RuneMine by Mine Labs is building the ultimate infrastructure for Bitcoin-backed assets, unlocking the potential of tokens across Bitcoin and beyond.",
  tags: ["bridge", "dapp", "bitcoin"],
  links: {
    website: "https://runemine.com",
    discord: "https://discord.gg/runemine",
    twitter: "https://x.com/minelabs_",
    documentation: "https://runemine.gitbook.io/runemine",
    medium: "https://medium.com/@rune_mine",
    telegram: "https://t.me/runeminecommunity",
  },
  tokens: ["BpREyqp3WWfwQroVHvDknoXuh2P88CENMXrSCrGS4dis"],
};

const contract = {
  name: "Staking",
  address: "BpREyqp3WWfwQroVHvDknoXuh2P88CENMXrSCrGS4dis",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "runemine-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
