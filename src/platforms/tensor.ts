import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "tensor",
  name: "Tensor",
  description: "Solana's Leading NFT Marketplace",
  tags: ["tool", "nft-marketplace", "dapp"],
  links: {
    website: "https://www.tensor.trade/",
    discord: "https://discord.gg/tensor",
    twitter: "https://twitter.com/tensor_hq",
    github: "https://github.com/tensor-hq",
    documentation: "https://docs.tensor.trade/",
  },
  tokens: ["TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6"],
};

const cnftContract = {
  name: 'cNFT',
  address: 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp',
  platformId: platform.id,
};

const contract = {
  name: 'Swap',
  address: 'TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN',
  platformId: platform.id,
};

const bidContract = {
  name: 'Bid',
  address: 'TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Magma',
  address: '3zK38YBP6u3BpLUpaa6QhRHh4VXdv3J8cmD24fFpuyqy',
  platformId: platform.id,
};

const ammContract = {
  name: 'AMM',
  address: 'TAMM6ub33ij1mbetoMyVBLeKY5iP41i4UPUJQGkhfsg',
  platformId: platform.id,
};

const luckyBuyContract = {
  name: 'Lucky Buy',
  address: 'LUCK57mxzZiRGF2PdHAY79P6tZ8Apsi381tKvBrTdqk',
  platformId: platform.id,
};

const marketplaceService: ServiceDefinition = {
  id: `${platform.id}-swap`,
  name: 'Marketplace',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const cnftService: ServiceDefinition = {
  id: `${platform.id}-cnft`,
  name: 'Marketplace',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [cnftContract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Vesting Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const bidService: ServiceDefinition = {
  id: `${platform.id}-bid`,
  name: 'Bid',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [bidContract],
};

const tammService: ServiceDefinition = {
  id: `${platform.id}-amm`,
  name: 'AMM',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [ammContract],
};

const luckyBuyService: ServiceDefinition = {
  id: `${platform.id}-lucky-buy`,
  name: 'Lucky Buy',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [luckyBuyContract],
};

export const services: ServiceDefinition[] = [
  marketplaceService,
  airdropService,
  bidService,
  cnftService,
  tammService,
  luckyBuyService,
];
export default services;
