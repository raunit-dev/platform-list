import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "honeyland",
  name: "Honeyland",
  description:
    "Honeyland is a play-to-earn strategy game where players manage bee colonies, harvest honey, breed NFT bees, and compete in PvP raids.",
  tags: ["gaming", "dapp"],
  links: {
    website: "https://honey.land/",
    discord: "https://discord.gg/playhoneyland",
    twitter: "https://x.com/PlayHoneyland",
  },
  tokens: ["3dgCCb15HMQSA4Pn3Tfii5vRk7aRqTH95LJjxzsG2Mug"],
};

const contract = {
  name: "Staking",
  address: "F1pkXm8W1WNbRvMoZTuKftHJ92ffuzddCCSRKKvCVL7n",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "honeyland-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
