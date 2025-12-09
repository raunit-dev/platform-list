import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "graphite",
  name: "Graphite Protocol",
  description:
    "Graphite Protocol is a staking platform associated with Taiyo Robotics, offering token and NFT staking services.",
  links: {
    website: "https://gpstaking.taiyorobotics.com/",
    twitter: "https://x.com/GraphiteProto",
    documentation: "https://solport.gitbook.io/graphite-whitepaper",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "7pXE4B9EgsEixnyW6U16dEHXKqaaU3mj63cCMqrPRy1C",
  networkId: NetworkId.solana,
};

const nftGen1StakingContract = {
  name: "Taiyo Gen1 Staking",
  address: "J1gmrCGd1zkmjYpsCRkFCsQQEZohRQLVXN4dVxKvDu1e",
  networkId: NetworkId.solana,
};

const nftGen2StakingContract = {
  name: "Taiyo Gen2 Staking",
  address: "5f7ZLHmrtjpiCjM2vhSfbewUyDPZcf8x2RDRYJnyMXxg",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const nftGen1service: ServiceRaw = {
  id: `${platform.id}-gen1-staking`,
  name: "Taiyo Gen1 Staking",
  platformId: platform.id,
  contractsRaw: [nftGen1StakingContract],
};

export const nftGen2service: ServiceRaw = {
  id: `${platform.id}-gen2-staking`,
  name: "Taiyo Gen2 Staking",
  platformId: platform.id,
  contractsRaw: [nftGen2StakingContract],
};

export const services: ServiceRaw[] = [service, nftGen1service, nftGen2service];
