import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "playsolana",
  name: "PlaySolana",
  description:
    "PlaySolana is a gaming platform offering play-to-earn games and NFT rewards.",
  tags: ["gaming", "dapp"],
  links: {
    website: "https://www.playsolana.com/",
    discord: "https://discord.com/invite/playsolanaofficial",
    twitter: "https://www.x.com/playsolana",
  },
};

const contract = {
  name: "Main",
  address: "EdvEewANQTdsEco8dKUgCcYA6ZBTen7bP4rwCZjXKJAA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
