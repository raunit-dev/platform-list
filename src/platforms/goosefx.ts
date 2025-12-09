import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "goosefx",
  name: "GooseFX",
  description:
    "GooseFX is a DeFi platform offering single-sided and dual-sided liquidity pools for yield farming.",
  defiLlamaId: "goosefx",
  links: {
    website: "https://app.goosefx.io/",
    discord: "https://discord.com/invite/cDEPXpY26q",
    telegram: "https://www.t.me/goosefx",
    twitter: "https://x.com/GooseFX1",
  },
  tokens: ["GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD"],
  tags: ["dapp"],
  isDeprecated: true,
};

const singleTokenPoolContract = {
  name: "Single Token Pools",
  address: "GFXsSL5sSaDfNFQUYsHekbWBW1TsFdjDYzACh62tEHxn",
  networkId: NetworkId.solana,
};

const dualTokenPoolContract = {
  name: "Dual Token Pools",
  address: "GAMMA7meSFWaBXF25oSUgmGRwaW6sCMFLmBNiMSdbHVT",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "STKRWxT4irmTthSJydggspWmkc3ovYHx62DHLPVv1f1",
  networkId: NetworkId.solana,
};

export const singleTokenPoolsService: ServiceRaw = {
  id: `${platform.id}-single-pools`,
  name: "Single Token Pools",
  platformId: platform.id,
  contractsRaw: [singleTokenPoolContract],
};

export const dualTokenPoolsService: ServiceRaw = {
  id: `${platform.id}-dual-pools`,
  name: "Dual Token Pools",
  platformId: platform.id,
  contractsRaw: [dualTokenPoolContract],
};

export const lpStakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [
  singleTokenPoolsService,
  dualTokenPoolsService,
  lpStakingService,
];
