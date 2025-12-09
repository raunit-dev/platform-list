import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "artrade",
  name: "Artrade",
  description:
    "Artrade was a marketplace for trading art and luxury items with on-chain verification.",
  links: {
    website: "https://artrade.app/",
    twitter: "https://x.com/ArtradeApp",
    discord: "https://discord.gg/QmCeeqmpMz",
    telegram: "https://t.me/ArtradeEnglish",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const contract = {
  name: "Artrade",
  address: "Yt3A8KLfo7JEz8RGHw2zbaQE6MVcf9duKmb24dgXbsD",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Artrade",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
