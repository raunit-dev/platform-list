import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "triad",
  name: "Triad",
  description:
    "Triad is a prediction markets platform for trading politics, crypto, sports & culture.",
  tags: ["dapp", "prediction", "defi"],
  links: {
    website: "https://app.triadfi.co/",
    discord: "http://discord.gg/triadfi",
    telegram: "https://t.me/triad369",
    twitter: "https://x.com/triadfi",
    github: "https://github.com/triadxyz",
    documentation: "https://docs.triadfi.co/",
  },
  tokens: ["t3DohmswhKk94PPbPYwA6ZKACyY3y5kbcqeQerAJjmV"],
};

const contract = {
  name: "Prediction Market",
  address: "TRDwq3BN4mP3m9KsuNUWSN6QDff93VKGSwE95Jbr9Ss",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-prediction-market`,
  name: "Prediction Market",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
