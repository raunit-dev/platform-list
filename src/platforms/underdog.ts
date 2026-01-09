import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "underdog",
  name: "Underdog",
  description:
    "Underdog is an NFT infrastructure platform that provides APIs and tools for minting, managing, and distributing compressed and dynamic NFTs.",
  links: {
    website: "https://mint.underdogprotocol.com/",
    twitter: "https://x.com/BackAnUnderdog",
    github: "https://github.com/UnderdogProtocol",
    documentation: "https://docs.underdogprotocol.com/",
  },
  tags: ["tool", "dapp"],
  isDeprecated: true,
};

export const mainContract = {
  name: "Core",
  address: "updg8JyjrmFE2h3d71p71zRXDR8q4C6Up8dDoeq3LTM",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [mainContract],
  link: "https://www.underdogprotocol.com/",
  description:
    "NFT infrastructure API for minting, managing, and distributing compressed NFTs at scale for loyalty programs, ticketing, and identity management.",
};

export const metadataService: ServiceRaw = {
  id: `${platform.id}-metadata`,
  name: "Metadata",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Dynamic NFT metadata management enabling real-time updates to NFT attributes and properties without reminting.",
};

export const services: ServiceRaw[] = [service, metadataService];
