import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "moonwalk",
  name: "Moonwalk",
  description:
    "Moonwalk is a move-to-earn fitness app that rewards users with crypto for achieving step goals through gamified challenges and competitions.",
  links: {
    website: "https://app.moonwalk.fit/",
    discord: "https://discord.com/invite/jBhgHWUJ9U",
    telegram: "https://t.me/+x0hEQqQP1GpjZGZh",
    twitter: "https://x.com/moonwalkfitness",
    documentation: "https://moonwalk.fit/faq",
  },
  tags: ["fitness", "dapp"],
};

export const mainContract: ContractRaw = {
  name: `Game`,
  address: "FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU",
  networkId: NetworkId.solana,
};

export const gameService: ServiceRaw = {
  id: `${platform.id}-game`,
  name: "Game",
  platformId: platform.id,
  contractsRaw: [mainContract],
  link: "https://app.moonwalk.fit/",
  description:
    "Move-to-earn fitness challenges where participants deposit crypto and achieve daily step goals to retain stakes and earn rewards from forfeited pools.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [gameService, airdropService];
