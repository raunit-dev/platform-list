import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "drip",
  name: "Drip Haus",
  description:
    "The Collectibles Platform. Collect, create, and earn on crypto's #1 content app.",
  links: {
    website: "https://drip.haus/",
    twitter: "https://x.com/drip_haus",
    documentation: "https://drip.haus/faq",
  },
  tags: ["nft-marketplace", "dapp"],
};

export const collectingService: ServiceRaw = {
  id: `${platform.id}-collecting`,
  name: "Collecting",
  platformId: platform.id,
  contractsRaw: [],
};

export const creatorRewardsService: ServiceRaw = {
  id: `${platform.id}-creator-rewards`,
  name: "Creator Rewards",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [
  collectingService,
  creatorRewardsService,
];
