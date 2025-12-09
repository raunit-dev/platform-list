import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "haven",
  name: "Haven",
  description:
    "Haven is an automated leverage management platform powered by Solauto for self-rebalancing positions.",
  tags: ["dapp"],
  links: {
    website: "https://haven.trade/",
    twitter: "https://x.com/haven_fi",
    discord: "https://discord.gg/DxJyNp5mS4",
    github: "https://github.com/haven-fi/solauto",
    telegram: "https://t.me/haven_fi",
  },
};

const contract = {
  name: "Leverage",
  address: "AutoyKBRaHSBHy9RsmXCZMy6nNFAg5FYijrvZyQcNLV",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
