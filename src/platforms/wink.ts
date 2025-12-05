import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "wink",
  name: "Wink (Only1)",
  description:
    "Wink is a decentralized social media platform that allows users to create and share content, connect with others, and earn rewards for their contributions.",
  links: {
    website: "https://w.ink/",
    discord: "https://discord.gg/Dp5P9X4tbU",
    telegram: "https://t.me/trywink",
    twitter: "https://twitter.com/try_wink",
  },
  tokens: ["3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR"],
  tags: ["social"],
};

const aggregatorContract: ContractRaw = {
  name: `Service`,
  address: "CDfyUBS8ZuL1L3kEy6mHVyAx1s9E97KNAwTfMfvhCriN",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-service`,
  name: "Service",
  platformId: platform.id,
  contractsRaw: [aggregatorContract],
};

export const services: ServiceRaw[] = [service];
