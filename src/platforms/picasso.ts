import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "picasso",
  name: "Picasso",
  description:
    "Picasso was a cross-chain protocol enabling IBC bridging and multi-asset restaking between Solana and Cosmos ecosystems.",
  tags: ["dapp", "lst"],
  links: {
    website: "https://www.picasso.network/",
    discord: "https://discord.com/invite/composable",
    telegram: "https://t.me/composablechat",
    github: "https://github.com/ComposableFi",
    medium: "https://medium.com/@Picasso_Network",
    documentation: "https://docs.picasso.network/",
  },
  tokens: ["966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ"],
  isDeprecated: true,
};

const contract = {
  name: "Picasso",
  address: "8n3FHwYxFgQCQc2FNFkwDUf9mcqupxXcCvgfHbApMLv3",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "picasso-restaking",
  name: "Picasso",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
