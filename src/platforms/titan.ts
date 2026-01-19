import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "titan",
  name: "Titan",
  description: "Titan is a decentralized exchange and liquidity aggregator.",
  defiLlamaId: "titan-exchange",
  links: {
    website: "https://titan.exchange/",
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

const limitOrderContract = {
  name: "Limit Order",
  address: "TitanLozLMhczcwrioEguG2aAmiATAPXdYpBg3DbeKK",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const limitOrderService: ServiceRaw = {
  id: `${platform.id}-limit-order`,
  name: "Limit Order",
  platformId: platform.id,
  contractsRaw: [limitOrderContract],
};

export const forgeService: ServiceRaw = {
  id: `${platform.id}-forge`,
  name: "Forge",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [
  service,
  forgeService,
  limitOrderService,
];
