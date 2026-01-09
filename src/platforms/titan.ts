import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "titan",
  name: "Titan",
  description: "Titan is a decentralized exchange and liquidity aggregator.",
  links: {
    website: "https://titandex.io/",
    twitter: "https://x.com/Titan_Exchange",
    discord: "https://discord.gg/titanexchange",
    telegram: "https://t.me/TitanDexSol",
    documentation: "https://titandex.gitbook.io/titan",
  },
  tags: ["tool", "dapp", "dex", "defi"],
};

const contract = {
  name: "Swap",
  address: "T1TANpTeScyeqVzzgNViGDNrkQ6qHz9KrSBS4aNXvGT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const forgeService: ServiceRaw = {
  id: `${platform.id}-forge`,
  name: "Forge",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [service, forgeService];
