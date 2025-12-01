import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "bio",
  name: "Bio",
  description:
    "The Bio protocol is DeSci’s new financial layer, engineered to commercialize the best science, faster.",
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
  name: 'Fundraising',
  address: '6M3fyRE18t6c7f9qes3eQMzR4QyPRMFZiyNQcApENCYf',
  platformId: platform.id,
};

const daoContract = {
  name: 'Curating',
  address: 'bioLd9krF2GytS6F7fw5bo8aUJzfbB15EWHtJAZQnAC',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-fundraising`,
  name: 'Fundraising',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const serviceDao: ServiceDefinition = {
  id: `${platform.id}-Curatiing`,
  name: 'Curatiing',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [daoContract],
};

export const services: ServiceDefinition[] = [service, serviceDao];
export default services;
