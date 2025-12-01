import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "goosefx",
  name: "GooseFX",
  description:
    "The best place to earn and farm yield on your assets with our AMMs. Simple, fast, and efficient.  ",
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
  name: 'Single Token Pools',
  address: 'GFXsSL5sSaDfNFQUYsHekbWBW1TsFdjDYzACh62tEHxn',
  platformId: platform.id,
};

const dualTokenPoolContract = {
  name: 'Dual Token Pools',
  address: 'GAMMA7meSFWaBXF25oSUgmGRwaW6sCMFLmBNiMSdbHVT',
  platformId: platform.id,
};
const stakingContract = {
  name: 'Staking',
  address: 'STKRWxT4irmTthSJydggspWmkc3ovYHx62DHLPVv1f1',
  platformId: platform.id,
};
const singleTokenPoolsService: ServiceDefinition = {
  id: `${platform.id}-single-pools`,
  name: 'Single Token Pools',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [singleTokenPoolContract],
};
const dualTokenPoolsService: ServiceDefinition = {
  id: `${platform.id}-dual-pools`,
  name: 'Dual Token Pools',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [dualTokenPoolContract],
};
const lpStakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [
  singleTokenPoolsService,
  dualTokenPoolsService,
  lpStakingService,
];
export default services;
