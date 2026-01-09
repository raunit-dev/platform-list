import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bonkrewards",
  name: "Bonk Rewards",
  description:
    "Bonk Rewards is the staking and utility platform for BONK, the community meme coin of Solana, offering staking rewards, swaps, and DAO governance.",
  defiLlamaId: "bonkswap",
  tags: ["memecoin", "dapp"],
  links: {
    website: "https://bonkrewards.com/",
    discord: "https://discord.com/invite/qaQa6M6mN2",
    telegram: "https://t.me/Official_Bonk_Inu",
    twitter: "https://x.com/bonk_inu",
    medium: "https://medium.com/@bonk_inu",
  },
  tokens: ["DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"],
};

const contract = {
  name: "Staking",
  address: "STAKEkKzbdeKkqzKpLkNQD3SUuLgshDKCD7U8duxAbB",
  networkId: NetworkId.solana,
};

const fireContract = {
  name: "Fire",
  address: "FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg",
  networkId: NetworkId.solana,
};

const swapContract = {
  name: "Swap",
  address: "BSwp6bEBihVLdqJRKGgzjcGLHkcTuzmSo1TQkHepzH8p",
  networkId: NetworkId.solana,
};

const bonkMasContract = {
  name: "BonkMas",
  address: "BMas2pUrC5GR1ZJFbJLy2UmBcEgCfdxB5QLSBrLRnvK4",
  networkId: NetworkId.solana,
};

const daoContract = {
  name: "DAO",
  address: "HA99cuBQCCzZu1zuHN2qBxo2FBo1cxNLwKkdt6Prhy8v",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://bonkrewards.com/stake",
  description:
    "BONK staking program allowing holders to lock tokens and earn rewards from the BONK Rewards Pool while gaining governance voting rights.",
};

export const fireService: ServiceRaw = {
  id: `${platform.id}-fire`,
  name: "Fire",
  platformId: platform.id,
  contractsRaw: [fireContract],
  description:
    "Token burn mechanism enabling the community to permanently remove BONK from circulation through scheduled burns and special events like BURNmas.",
};

export const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [swapContract],
  link: "https://bonkrewards.com/swap",
  description:
    "Decentralized exchange for swapping tokens and providing liquidity to AMM pools within the BONK ecosystem.",
};

export const bonkMasService: ServiceRaw = {
  id: `${platform.id}-bonkmas`,
  name: "BONKmas",
  platformId: platform.id,
  contractsRaw: [bonkMasContract],
};

export const daoService: ServiceRaw = {
  id: `${platform.id}-dao`,
  name: "DAO",
  platformId: platform.id,
  contractsRaw: [daoContract],
  description:
    "Decentralized governance system enabling staked BONK holders to submit proposals and vote on community initiatives, grants, and ecosystem development.",
};

export const services: ServiceRaw[] = [
  stakingService,
  fireService,
  swapService,
  bonkMasService,
  daoService,
];
