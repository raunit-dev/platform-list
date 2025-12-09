import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "backwoods",
  name: "Backwoods",
  description:
    "Backwoods is a roguelite game featuring procedural dungeons and on-chain rewards.",
  links: {
    website: "https://backwoods.gg/",
    twitter: "https://x.com/TheBackwoodsSol",
    discord: "https://discord.gg/backwoodsgg",
    documentation: "https://backwoods.gg/#",
  },
  tags: ["gaming"],
};

const contract = {
  name: "Game",
  address: "H5RnrnQFVYiGCsGomawwyZ1gJgmMsSXDYbpidZredcGZ",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-game`,
  name: "Game",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
