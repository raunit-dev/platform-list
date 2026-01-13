import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "trojan",
  name: "Trojan",
  description:
    "Trojan's Terminal is a high-performance, intuitive crypto trading platform.",
  links: {
    website: "https://trojan.com/",
    documentation: "https://docs.trojan.com/",
    twitter: "https://x.com/TrojanOnSolana",
    discord: "https://discord.gg/trojan",
    telegram: "https://t.me/trojan",
  },
  tags: ["dapp", "dex"],
  addedAt: 1768316327000,
};

const contract = {
  name: "Trade",
  address: "troyXT7Ty3s2rjJe4bqWaroUrS4Fjd8rbHHNHxcACF4",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
