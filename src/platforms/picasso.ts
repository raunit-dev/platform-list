import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "picasso",
  name: "Picasso",
  description:
    "Picasso L1 Protocol enables secure bridging and multi-asset restaking through cross-chain Inter-Blockchain-Communication (IBC).",
  tags: ["dapp", "lst"],
  links: {
    website: "https://www.picasso.network/",
    discord: "https://discord.com/invite/composable",
    telegram: "https://t.me/composablechat",
    twitter: "https://x.com/picasso_network",
    github: "https://github.com/ComposableFi",
    medium: "https://medium.com/@Picasso_Network",
    documentation: "https://docs.picasso.network/",
  },
  tokens: ["966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ"],
  isDeprecated: true,
};

const contract = {
  name: 'Picasso',
  address: '8n3FHwYxFgQCQc2FNFkwDUf9mcqupxXcCvgfHbApMLv3',
  platformId: 'picasso',
};

const service: ServiceDefinition = {
  id: 'picasso',
  name: 'Picasso',
  platformId: 'picasso',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
