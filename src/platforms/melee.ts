import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "melee",
  name: "Melee",
  description:
    "Melee is a prediction market platform offering leveraged bets on real-world events with high potential returns.",
  tags: ["dapp"],
  links: {
    website: "https://alpha.melee.markets/",
    telegram: "https://t.me/meleealpha",
    twitter: "https://x.com/meleemarkets",
    documentation: "https://melee-1.gitbook.io/melee-docs",
  },
};

const contract = {
  name: "Prediction",
  address: "HK4ai9cQNxF9Btu2aUXNiqGLKF88p3ep2cVEtYo7uK4m",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-prediction`,
  name: "Prediction",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
