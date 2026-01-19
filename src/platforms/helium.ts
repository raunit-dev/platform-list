import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "helium",
  name: "Helium",
  description:
    "Helium is a decentralized wireless network providing IoT (LoRaWAN) and mobile (5G/WiFi) coverage through user-operated hotspots across 80+ countries.",
  links: {
    website: "https://www.helium.com/",
    discord: "https://discord.gg/helium",
    twitter: "https://x.com/helium",
    github: "https://github.com/helium",
    documentation: "https://docs.helium.com/",
  },
  defiLlamaId: "helium-network",
  platformToken: "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
  tokens: [
    "iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns",
    "mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6",
  ],
  tags: ["depin", "dapp"],
};

const contract = {
  name: "Voter Stake Registry",
  address: "hvsrNC3NKbcryqDs2DocYHZ9yPKEVzdSjQG6RVtK1s8",
  networkId: NetworkId.solana,
};

const daoContract = {
  name: "Sub DAO",
  address: "hdaoVTCqhfHHo75XdAMxBKdUqvq1i5bF23sisBqVgGR",
  networkId: NetworkId.solana,
};

export const governanceV1Service: ServiceRaw = {
  id: `${platform.id}-governance-v1`,
  name: "Governance V1",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const governanceV2Service: ServiceRaw = {
  id: `${platform.id}-governance-v2`,
  name: "Governance V2",
  platformId: platform.id,
  contractsRaw: [daoContract],
};

export const services: ServiceRaw[] = [
  governanceV1Service,
  governanceV2Service,
];
