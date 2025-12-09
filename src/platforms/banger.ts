import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "banger",
  name: "Banger",
  description:
    "Banger is a SocialFi platform for launching and trading tokens tied to tweets (tweetcoins).",
  tags: ["social", "dapp"],
  links: {
    website: "https://www.banger.lol/",
    twitter: "https://x.com/bangerdotlol",
    documentation: "https://banger.gitbook.io/banger-docs",
  },
};

const contract = {
  name: "Launch",
  address: "BANGURqoS7pzE8MEtQrqxHPD9qYHfYdhCA7NVWPZvCtT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "banger-launch",
  name: "Launch",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
