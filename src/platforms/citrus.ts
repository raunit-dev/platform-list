import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "citrus",
  name: "Citrus",
  description:
    "Solana's most feature packed and friendly NFT lending platform, brought to you by the Famous Fox Federation.",
  defiLlamaId: "citrus",
  links: {
    website: "https://citrus.famousfoxes.com/",
    discord: "https://discord.com/invite/famousfoxes",
    twitter: "https://twitter.com/FamousFoxFed",
    documentation: "https://citrus.famousfoxes.com/faq",
  },
  tags: ["dapp"],
};

const lendingContract = {
  name: 'Lending',
  address: 'JCFRaPv7852ESRwJJGRy2mysUMydXZgVVhrMLmExvmVp',
  platformId: platform.id,
};

const lendingService: ServiceDefinition = {
  id: `${platform.id}-lending`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [lendingContract],
};

export const services: ServiceDefinition[] = [lendingService];
export default services;
