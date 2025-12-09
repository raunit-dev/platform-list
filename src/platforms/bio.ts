import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bio",
  name: "Bio",
  description:
    "Bio Protocol is a DeSci platform enabling fundraising and curation for scientific research commercialization.",
  tags: ["desci", "dapp"],
  links: {
    website: "https://www.bio.xyz/",
    discord: "https://discord.gg/bioxyz",
    twitter: "https://x.com/bioprotocol",
    documentation: "https://docs.bio.xyz/bio",
    telegram: "http://t.me/bio_protocol",
  },
  tokens: ["bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ"],
};

const contract = {
  name: "Fundraising",
  address: "6M3fyRE18t6c7f9qes3eQMzR4QyPRMFZiyNQcApENCYf",
  networkId: NetworkId.solana,
};

const daoContract = {
  name: "Curating",
  address: "bioLd9krF2GytS6F7fw5bo8aUJzfbB15EWHtJAZQnAC",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-fundraising`,
  name: "Fundraising",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const serviceDao: ServiceRaw = {
  id: `${platform.id}-Curatiing`,
  name: "Curatiing",
  platformId: platform.id,
  contractsRaw: [daoContract],
};

export const services: ServiceRaw[] = [service, serviceDao];
