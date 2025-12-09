import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "cudis",
  name: "Cudis",
  description:
    "CUDIS is a DePIN wellness wearable featuring an AI-powered smart ring that tracks health metrics and rewards users for healthy behaviors.",
  tags: ["dapp", "fitness", "depin"],
  links: {
    website: "https://www.cudis.xyz/002",
    twitter: "https://x.com/CudisWellness",
    discord: "https://discord.gg/cudis",
  },
};

const contract = {
  name: "Main",
  address: "H3tzuPeKMHd1Wee4JyuYbwKX6pHTcKGDgPw8caVNTvQu",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
