import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "fragmetric",
  name: "Fragmetric",
  description:
    "Fragmetric is a native liquid restaking protocol on Solana that aims to improve the economic potential and security of the Solana ecosystem.",
  defiLlamaId: "fragmetric",
  tags: ["dapp", "lst"],
  links: {
    website: "https://fragmetric.xyz/",
    discord: "https://discord.gg/fragmetric",
    twitter: "https://x.com/fragmetric",
    github: "https://github.com/fragmetric-labs",
    documentation: "https://docs.fragmetric.xyz/",
  },
  tokens: [
    "WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U",
    "FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo",
    "FRAGJ157KSDfGvBJtCSrsTWUqFnZhrw4aC8N8LqHuoos",
  ],
};

const contract = {
  name: 'Fragmetric',
  address: 'fragnAis7Bp6FTsMoa6YcH8UffhEw43Ph79qAiK3iF3',
  platformId: 'fragmetric',
};

const airdropContract = {
  name: 'Airdrop',
  address: 'fdropWhSi5xVKa9z26qKXveXoHDePDXfb5zxt3RKvKx',
  platformId: 'fragmetric',
};

const service: ServiceDefinition = {
  id: 'fragmetric',
  name: 'Fragmetric',
  platformId: 'fragmetric',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const airdropService: ServiceDefinition = {
  id: 'fragmetric-airdrop',
  name: 'Fragmetric Airdrop',
  platformId: 'fragmetric',
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [service, airdropService];
export default services;
