import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
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
const aggregatorContract: Contract = {
  name: `Service`,
  address: 'CDfyUBS8ZuL1L3kEy6mHVyAx1s9E97KNAwTfMfvhCriN',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-service`,
    name: 'Service',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [aggregatorContract],
  },
];
export default services;
