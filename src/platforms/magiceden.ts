import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "magiceden",
  name: "MagicEden",
  description: "The NFT Marketplace.",
  links: {
    website: "https://magiceden.io/solana",
    discord: "https://discord.gg/magiceden",
    twitter: "https://twitter.com/MagicEden",
    github: "https://github.com/magiceden",
    documentation: "https://community.magiceden.io/learn",
  },
  tokens: ["MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u"],
  tags: ["tool", "nft-marketplace", "dapp"],
};

const ammContract = {
  name: 'AMM',
  address: 'mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Magic Claim',
  address: 'mcmexbLZHASMjxjARNvDhXnEQT8vMP4uWnBi1Et8RdX',
  platformId: platform.id,
};

const distributionContract = {
  name: 'Magic Claim Distribution',
  address: 'disGCfSiJKFigEphfou4PGHn1rukMfbs9cg9GpTM6oe',
  platformId: platform.id,
};

const escrowContract = {
  name: 'MarketPlace',
  address: 'M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K',
  platformId: platform.id,
};

const cnftContract = {
  name: 'CNFT',
  address: 'M3mxk5W2tt27WGT7THox7PmgRDp4m6NEhL5xvxrBfS1',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Staking',
  address: 'veTbq5fF2HWYpgmkwjGKTYLVpY6miWYYmakML7R7LRf',
  platformId: platform.id,
};

const auctionContract = {
  name: 'Auction',
  address: 'E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe',
  platformId: platform.id,
};

const candyMachineContract = {
  name: 'Candy Machine',
  address: 'CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb',
  platformId: platform.id,
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      airdropContract.address,
      distributionContract.address,
    ]),
};

const escrowService: ServiceDefinition = {
  id: `${platform.id}-marketPlace`,
  name: 'MarketPlace',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [escrowContract],
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const auctionService: ServiceDefinition = {
  id: `${platform.id}-auction`,
  name: 'Auction',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [auctionContract],
};

const cnftService: ServiceDefinition = {
  id: `${platform.id}-cnft`,
  name: 'cNFT',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [cnftContract],
};

const launchpadService: ServiceDefinition = {
  id: `${platform.id}-launchpad`,
  name: 'Launchpad',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [candyMachineContract],
};

const ammService: ServiceDefinition = {
  id: `${platform.id}-amm`,
  name: 'AMM',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [ammContract],
};

export const services: ServiceDefinition[] = [
  airdropService,
  escrowService,
  stakingService,
  auctionService,
  cnftService,
  launchpadService,
  ammService,
];
export default services;
