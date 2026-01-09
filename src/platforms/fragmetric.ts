import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "fragmetric",
  name: "Fragmetric",
  description:
    "Fragmetric is a liquid restaking protocol enabling users to restake SOL for enhanced yields while maintaining liquidity.",
  defiLlamaId: "fragmetric",
  tags: ["dapp", "lst", "restaking", "defi"],
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
  name: "Fragmetric",
  address: "fragnAis7Bp6FTsMoa6YcH8UffhEw43Ph79qAiK3iF3",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "fdropWhSi5xVKa9z26qKXveXoHDePDXfb5zxt3RKvKx",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "fragmetric-restaking",
  name: "Fragmetric",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://fragmetric.xyz/",
  description:
    "Liquid restaking protocol enabling users to restake SOL-based LSTs to secure additional networks while earning enhanced yields through fragSOL.",
};

export const airdropService: ServiceRaw = {
  id: "fragmetric-airdrop",
  name: "Fragmetric Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [service, airdropService];
