import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "adrena",
  name: "Adrena",
  description:
    "Adrena is a decentralized perpetuals DEX offering up to 100x leverage with zero price impact trades.",
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
  name: "Main",
  address: "13gDzEXCdocbj8iAiqrScGo47NiSuYENGsRqi3SEAwet",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
