import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "meteora",
  name: "Meteora",
  description: "Building the most dynamic liquidity protocols in DeFi.",
  defiLlamaId: "parent#meteora",
  links: {
    website: "https://meteora.ag/",
    discord: "https://discord.gg/WwFwsVtvpH",
    twitter: "https://x.com/MeteoraAG",
    github: "https://github.com/MeteoraAg",
    documentation: "https://docs.meteora.ag/",
  },
  tags: ["dapp"],
  tokens: ["METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL"],
};

const mercurialStableSwapContract: Contract = {
  name: `Mercurial Stable Swap`,
  address: 'MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky',
  platformId: platform.id,
};

const meteoraVaultsContract: Contract = {
  name: `Vaults`,
  address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi',
  platformId: platform.id,
};
const meteoraPoolsContract: Contract = {
  name: `Pools`,
  address: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB',
  platformId: platform.id,
};
const meteoraFarmsContract: Contract = {
  name: `Farms`,
  address: 'FarmuwXPWXvefWUeqFAa5w6rifLkq5X6E8bimYvrhCB1',
  platformId: platform.id,
};
const meteoraDlmmContract: Contract = {
  name: `DLMM`,
  address: 'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo',
  platformId: platform.id,
};
const meteoraDlmmVaultsContract: Contract = {
  name: `DLMM Vaults`,
  address: 'vaU6kP7iNEGkbmPkLmZfGwiGxd4Mob24QQCie5R9kd2',
  platformId: platform.id,
};
const m3m3Contract: Contract = {
  name: `M3M3 Staking`,
  address: 'FEESngU3neckdwib9X3KWqdL7Mjmqk9XNp3uh5JbP4KP',
  platformId: platform.id,
};

const dammV2Contract: Contract = {
  name: `AMM V2`,
  address: 'cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG',
  platformId: platform.id,
};

const zapContract: Contract = {
  name: `Zap`,
  address: 'zapvX9M3uf5pvy4wRPAbQgdQsM1xmuiFnkfHKPvwMiz',
  platformId: platform.id,
};

const liquidityAirdropContract: Contract = {
  name: `Liquidity Airdrop`,
  address: 'pDisRpxvnFw4osSqDPqMJ62tLsVQGsHL4tMX23ArYrL',
  platformId: platform.id,
};

export const bondingCurveContract: Contract = {
  name: `Bonding Curve`,
  address: 'dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-mercurial-stableswap`,
    name: 'Stable Swap',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [mercurialStableSwapContract],
  },
  {
    id: `${platform.id}-vaults`,
    name: 'Vaults',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [meteoraVaultsContract],
  },
  {
    id: `${platform.id}-pools`,
    name: 'Pools',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [meteoraPoolsContract],
  },
  {
    id: `${platform.id}-farms`,
    name: 'Farms',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [meteoraFarmsContract],
  },
  {
    id: `${platform.id}-dlmm`,
    name: 'DLMM',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [meteoraDlmmContract],
  },
  {
    id: `${platform.id}-dlmm-vaults`,
    name: 'DLMM Vaults',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [meteoraDlmmVaultsContract],
  },
  {
    id: `${platform.id}-damm-v2`,
    name: 'DAMM V2',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [dammV2Contract],
  },
  {
    id: `${platform.id}-m3m3-staking`,
    name: 'Staking',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [m3m3Contract],
  },
  {
    id: `${platform.id}-bonding-curve`,
    name: 'Bonding Curve',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [bondingCurveContract],
  },
  {
    id: `${platform.id}-zap`,
    name: 'Zap',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [zapContract],
  },
  {
    id: `${platform.id}-liquidity-airdrop`,
    name: 'Liquidity Airdrop',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [liquidityAirdropContract],
  },
];

export default services;
