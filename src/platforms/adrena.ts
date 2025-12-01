import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "adrena",
  name: "Adrena",
  description:
    "Adrena is a decentralized protocol for borrowing and lending on Solana.",
  defiLlamaId: "adrena-protocol",
  tags: ["dapp"],
  links: {
    website: "https://app.adrena.xyz/",
    discord: "https://discord.gg/adrena",
    twitter: "https://x.com/AdrenaProtocol",
    github: "https://github.com/orgs/AdrenaFoundation",
    documentation: "https://docs.adrena.xyz/",
  },
  tokens: [
    "AuQaustGiaqxRvj2gtCdrd22PBzTn8kM3kEPEkZCtuDw",
    "4yCLi5yWGzpTWMQ1iWHG5CrGYAdBkhyEdsuSugjDUqwj",
  ],
};

const contract = {
  name: 'Main',
  address: '13gDzEXCdocbj8iAiqrScGo47NiSuYENGsRqi3SEAwet',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Core',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
