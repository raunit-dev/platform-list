import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "famousfoxfederation",
  name: "Famous Fox Federation",
  description:
    "Famous Fox Federation is a 7,777 NFT collection with staking for FOXY rewards, missions, breeding mechanics, and DAO governance.",
  links: {
    website: "https://famousfoxes.com",
    discord: "https://discord.com/invite/famousfoxes",
    twitter: "https://x.com/famousfoxfed",
  },
  tokens: ["FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq"],
  tags: ["nft-collection", "dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "FoXpJL1exLBJgHVvdSHNKyKu2xX2uatctH9qp6dLmfpP",
  networkId: NetworkId.solana,
};

const mainContract = {
  name: "Main",
  address: "JUicemrQ1X9XizUh1Pcn1SMJoArP8udtEqG5vZiWvkz",
  networkId: NetworkId.solana,
};

const missionsContract = {
  name: "Missions",
  address: "6NcdQ5WTnrPoMLbP4kvpLYa4YSwKqkNHRRE8XVf5hmv9",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  link: "https://famousfoxes.com/stake",
  description:
    "NFT staking program allowing Fox holders to lock their NFTs and earn daily FOXY token rewards while retaining DAO eligibility.",
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-tools`,
  name: "Tool",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const missionsService: ServiceRaw = {
  id: `${platform.id}-missions`,
  name: "Missions",
  platformId: platform.id,
  contractsRaw: [missionsContract],
  link: "https://famousfoxes.com/missions",
  description:
    "Gamified staking feature where Foxes embark on themed adventures to earn Treasury Chests and FAME tokens for cosmetic upgrades.",
};

export const services: ServiceRaw[] = [
  stakingService,
  mainService,
  missionsService,
];
