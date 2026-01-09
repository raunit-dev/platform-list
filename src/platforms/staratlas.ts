import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "staratlas",
  name: "Star Atlas",
  description:
    "Star Atlas is a blockchain-based space exploration and strategy game featuring NFT ships, territorial conquest, and a player-driven economy.",
  tags: ["gaming"],
  links: {
    website: "https://staratlas.com/",
    discord: "https://discord.com/invite/StarAtlas",
    telegram: "https://t.me/staratlasgame",
    twitter: "https://x.com/staratlas",
    github: "https://github.com/staratlasmeta",
    documentation: "https://staratlas.com/newsroom/game-manuals",
  },
  tokens: [
    "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
  ],
};

const stakingContract = {
  name: "Staking",
  address: "ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc",
  networkId: NetworkId.solana,
};

const lockerContract = {
  name: "Locker",
  address: "Lock7kBijGCQLEFAmXcengzXKA88iDNQPriQ7TbgeyG",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  contractsRaw: [stakingContract, lockerContract],
};

export const services: ServiceRaw[] = [service];
